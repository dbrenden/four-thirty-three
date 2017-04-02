(ns four-thirty-three-core.dummy
  (:require [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp]
            [four-thirty-three-core.protocols.recordable :as rp]
            [four-thirty-three-core.protocols.scheduled :as sp]
            [four-thirty-three-core.core :as core]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]
            [cljs.core.async :refer [chan promise-chan]])
  (:require-macros [cljs.core.async :refer [go]]))

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

(defrecord ScheduledRecorder [recorder period recording-length buffer-length output>]
  sp/Scheduled
  (let [start-time (atom (t/now)) ;; change to now
        post-sleep-length (atom 0)
        stop> (promise-chan)]
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
             (go (let [recording (p/start recorder {})]
                   (a/<! (a/timeout recording-length))
                   (a/>! output> (p/stop recorder recording)))))
    (sleep [this]
           (go (let [new-start-time (t/now)]
                 (reset! post-sleep-length (- period (- (tc/to-long new-start-time) @start-time)))
                 (reset! start-time new-start-time)
                 (println "POST-RECORD-SLEEP: " {:post-record-timeout-length @post-record-timeout-length})
                 (let [pre-sleep-length (rand-int (- period recording-length buffer-length))
                       timeout-length (+ @post-sleep-length pre-sleep-length)]
                   (println "PRE-RECORD-SLEEP: " {:pre-sleep-length pre-sleep-length})
                   (println "TIMEOUT LENGTH: " {:timeout-length timeout-length})
                   (a/<! (a/timeout timeout-length))))))
    (stop [this]
          (go (a/>! stop> true)))))

(defonce stop-fn (atom nil))

(defn stop []
  (when-let [stop-fn @stop-fn]
    (stop-fn)))

(defn instantiate []
  (let [output> (chan 100)
        scheduled-recorder (ScheduledRecorder. (Recorder.) 60000 5000 10000 output>)]
    (sp/init scheduled-recorder)
    (reset! stop-fn (fn [] (sp/stop scheduled-recorder)))))
