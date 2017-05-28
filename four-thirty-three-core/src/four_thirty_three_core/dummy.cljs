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

(defn calc-post-record-sleep
  [{:keys [period record-start-time record-end-time pre-record-sleep]}]
  (- period pre-record-sleep
     (- record-end-time record-start-time)))

(defn calc-pre-record-sleep
  [{:keys [period recording-length buffer-length]}]
  (rand-int (- period recording-length buffer-length)))

(defrecord ScheduledRecorder [recorder period recording-length buffer-length output> stop>]
  sp/Scheduled
  (init [this]
    (go
      (loop [record-start-time (tc/to-long (t/now)) ;;Time that recording starts
             pre-record-sleep 0] ;;Length of time spent sleeping between beginning of period and record
        (let [_ (<! (sp/perform this))
              record-end-time (tc/to-long (t/now)) ;;Time at which recording ended
              post-record-sleep (calc-post-record-sleep {:period period
                                                         :record-start-time record-start-time
                                                         :pre-record-sleep pre-record-sleep
                                                         :record-end-time record-end-time})
              _ (println "SUM OF SLEEPS: " (+ pre-record-sleep post-record-sleep recording-length) " PERIOD: " period " (should be equal)")
              pre-record-sleep (calc-pre-record-sleep {:period period
                                                       :recording-length recording-length
                                                       :buffer-length buffer-length})
              timeout-length (+ post-record-sleep pre-record-sleep)]
          (println "POST-RECORD-SLEEP: " {:post-record-sleep post-record-sleep})
          (println "PRE-RECORD-SLEEP: " {:pre-record-sleep pre-record-sleep})
          (println "TIMEOUT LENGTH: " {:timeout-length timeout-length})
          (alts! [stop> (a/timeout timeout-length)])
          (if-not (a/poll! stop>)
            (recur (tc/to-long (t/now)) pre-record-sleep)
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
