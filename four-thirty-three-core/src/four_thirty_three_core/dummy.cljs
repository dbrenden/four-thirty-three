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

(defrecord ScheduledRecorder [recorder period recording-length buffer-length output> stop>]
  sp/Scheduled
  (init [this]
    (go
      (loop [start-time (tc/to-long (t/now))
             pre-sleep-length 0]
        (let [_ (<! (sp/perform this))
              post-record-time (tc/to-long (t/now))
              post-sleep-length (- period pre-sleep-length
                                   (- post-record-time start-time))
              pre-sleep-length (rand-int (- period recording-length buffer-length))
              timeout-length (+ post-sleep-length pre-sleep-length)]
          (println "POST-RECORD-SLEEP: " {:post-sleep-length post-sleep-length})
          (println "PRE-RECORD-SLEEP: " {:pre-sleep-length pre-sleep-length})
          (println "TIMEOUT LENGTH: " {:timeout-length timeout-length})
          (alts! [stop> (a/timeout timeout-length)])
          (if-not (a/poll! stop>)
            (recur (tc/to-long (t/now)) pre-sleep-length)
            (do (println "Shutting down recording")
                (a/close! output>)))))))
  (perform [this]
    (go (let [recording (rp/start recorder {})
              [v c] (alts! [stop> (a/timeout recording-length)])]
          (when-not (= c stop>)
            (a/>! output> (rp/stop recorder recording))))))
  (stop [this]
    (go (a/>! stop> true))))

(defn instantiate []
  (let [scheduled-recorder (map->ScheduledRecorder. {:recorder (Recorder.)
                                                     :period 60000
                                                     :recording-length 5000
                                                     :buffer-length 10000
                                                     :output> (a/chan 100)
                                                     :stop> (a/promise-chan)})]
    (sp/init scheduled-recorder)
    scheduled-recorder))
