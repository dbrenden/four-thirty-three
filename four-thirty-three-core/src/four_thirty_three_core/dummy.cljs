(ns four-thirty-three-core.dummy
  (:require [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp]
            [four-thirty-three-core.protocols.recordable :as rp]
            [four-thirty-three-core.protocols.scheduled :as sp]
            [four-thirty-three-core.core :as core]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]
            [cljs.core.async :as a])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defrecord Recorder []
  rp/Recordable
  (start [_ params]
    (println "STARTING RECORDING")
    "recording")
  (stop [_ recording]
    (println "STOPPING RECORDING")
    recording))

(defrecord Uploader []
  up/Uploadable
  (upload [_ params]
    (go (println "UPLOADING TO DROPBOX"))))

(defrecord Poster []
  pp/Postable
  (post [_ params]
    (println "POSTING TO TVVITTER")))

(defn sleep-fn []
  (let [start-time (atom (tc/to-long (t/now)))
        post-sleep-length (atom 0)]
    (fn [scheduled-recorder]
      (go
        (let [new-start-time (tc/to-long (t/now))
              {:keys [period recording-length buffer-length]} scheduled-recorder]
          (reset! post-sleep-length (- period
                                       (- new-start-time @start-time)))
          (reset! start-time new-start-time)
          (println "POST-RECORD-SLEEP: " {:post-sleep-length @post-sleep-length})
          (let [pre-sleep-length (rand-int (- period recording-length buffer-length))
                timeout-length (+ @post-sleep-length pre-sleep-length)]
            (println "PRE-RECORD-SLEEP: " {:pre-sleep-length pre-sleep-length})
            (println "TIMEOUT LENGTH: " {:timeout-length timeout-length})
            (a/<! (a/timeout timeout-length))))))))

(defrecord ScheduledRecorder [recorder period recording-length buffer-length sleep-fn output> stop>]
  sp/Scheduled
  (init [this]
    (go
      (loop []
        (if-not (a/poll! stop>)
          (do (<! (sp/perform this))
              (alts! stop> (sp/sleep this))
              (recur))
          (do (println "Shutting down recording")
              (a/close! output>))))))
  (perform [this]
    (go (let [recording (rp/start recorder {})]
          (a/<! (a/timeout recording-length))
          (a/>! output> (rp/stop recorder recording)))))
  (sleep [this] (sleep-fn))
  (stop [this]
    (go (a/>! stop> true))))

(defonce stop-fn (atom nil))

(defn stop []
  (when-let [stop-fn @stop-fn]
    (stop-fn)))

(defn instantiate []
  (let [scheduled-recorder (map->ScheduledRecorder. {:recorder (Recorder.)
                                                     :period 60000
                                                     :recording-length 5000
                                                     :buffer-length 10000
                                                     :sleep-fn (sleep-fn)
                                                     :output> (a/chan 100)
                                                     :stop> (a/promise-chan)})]
    (sp/init scheduled-recorder)
    (reset! stop-fn (fn [] (sp/stop scheduled-recorder)))))
