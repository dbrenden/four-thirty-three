(ns four-thirty-three.shared.scheduled-recorder
  (:require [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp]
            [four-thirty-three-core.protocols.recordable :as rp]
            [four-thirty-three-core.protocols.scheduled :as sp]
            [four-thirty-three-core.util :as u]
            [four-thirty-three.shared.recorder :refer [Recorder]]
            [four-thirty-three.shared.util :as su]
            [cljs.core.async :as a]
            [cljs.spec.alpha :as s]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def BackgroundJob (js/require "react-native-background-job"))
(def BackgroundTimer (js/require "react-native-background-timer"))
(def SimpleStore (js/require "react-native-simple-store"))

(def scheduler-period 1037000)

(defn register
  [func]
  (.log js/console "Registering function")
  (.register BackgroundJob #js {:jobKey "fourThirtyThreeRecord" :job func}))

(defn schedule
  [period]
  (.log js/console (str "Scheduling function to fire in " (int (/ period 1000)) " secs"))
  (.schedule BackgroundJob #js {:jobKey "fourThirtyThreeRecord" :period period :timeout 900000}))

(defrecord ScheduledRecorder [recorder period recording-length buffer-length]
  sp/Scheduled
  (init [this]
    (.log js/console "STARTING UP SCHEDULED RECORDER")
    (-> (.save SimpleStore "scheduler-state" #js {:recordingDate (tc/to-long (t/now))
                                                  :preRecordSleep 0})
        (.then (fn [] (schedule scheduler-period)))))
  (perform [this]
    (.log js/console "Getting state from storage")
    (-> (.get SimpleStore "scheduler-state")
        (.then
         (fn [state]
           (.log js/console "Performing record")
           (let [now (tc/to-long (t/now))
                 recording-date (.-recordingDate state)
                 after-recording-date? (> now recording-date)]
             (.log js/console (str "Job Fired, comparing current time with recording-date"))
             (.log js/console (str "Timestamp NOW: " (su/gen-timestamp now) " Recording-date: " (su/gen-timestamp recording-date)))
             (.log js/console (str "After recording date: " after-recording-date?))

             (when after-recording-date?
               (rp/start recorder nil)
               (.log js/console (str "RECORDING FOR: " recording-length " msecs"))
               (.setTimeout BackgroundTimer (fn [] (rp/stop recorder nil)) recording-length)
               (let [record-start-time now
                     record-end-time (+ record-start-time recording-length)
                     pre-record-sleep (.-preRecordSleep state)
                     post-record-sleep (u/calc-post-record-sleep {:period period
                                                                  :record-start-time record-start-time
                                                                  :pre-record-sleep pre-record-sleep
                                                                  :record-end-time record-end-time})]
                 (.log js/console "SUM OF SLEEPS: " (+ pre-record-sleep post-record-sleep recording-length) " PERIOD: " period " (should be equal)")
                 (.update SimpleStore "scheduler-state" #js {:preRecordSleep (u/calc-pre-record-sleep {:period period
                                                                                                       :recording-length recording-length
                                                                                                       :buffer-length buffer-length})
                                                             :recordingDate (+ recording-date pre-record-sleep post-record-sleep)}))))))))
  (stop [this]
    (.cancel BackgroundJob #js {:jobKey "fourThirtyThreeRecord"})))

;;TODO: Replace all atoms with calls to AsyncStore

(defn instantiate [period recording-length]
  (let [buffer-length 10000
        scheduled-recorder (map->ScheduledRecorder. {:recorder (Recorder.)
                                                     :period period
                                                     :recording-length recording-length
                                                     :buffer-length buffer-length})]
    (register (fn [] (sp/perform scheduled-recorder)))
    scheduled-recorder))
