(ns four-thirty-three.shared.scheduled-recorder
  (:require [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp]
            [four-thirty-three-core.protocols.recordable :as rp]
            [four-thirty-three-core.protocols.scheduled :as sp]
            [four-thirty-three-core.util :as u]
            [cljs.core.async :as a]
            [cljs.spec.alpha :as s]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def BackgroundJob (js/require "react-native-background-job"))
(def BackgroundTimer (js/require "react-native-background-timer"))

(def scheduler-period 1037000)

(defn register
  [func]
  (.log js/console "Registering function")
  (.register BackgroundJob #js {:jobKey "fourThirtyThreeRecord" :job func}))

(defn schedule
  [period]
  (.log js/console (str "Scheduling function to fire in " (int (/ period 1000)) " secs"))
  (.schedule BackgroundJob #js {:jobKey "fourThirtyThreeRecord" :period period :timeout 900000}))

(defrecord Recorder []
  rp/Recordable
  (start [_ params]
    (.log js/console "STARTING RECORDING")
    "recording")
  (stop [_ recording]
    (.log js/console "STOPPING RECORDING")
    recording))

(defrecord ScheduledRecorder [recorder period recording-length buffer-length pre-record-sleep recording-date]
  sp/Scheduled
  (init [this]
    (.log js/console "STARTING UP SCHEDULED RECORDER")
    (sp/stop this)
    (let [record-fn (fn []
                      (let [now (tc/to-long (t/now))
                            after-recording-date? (> now @recording-date)]
                        (.log js/console (str "Job Fired, comparing current time with recording-date"))
                        (.log js/console (str "NOW: " now " Recording-date: " @recording-date))
                        (.log js/console (str "After recording date: " after-recording-date?))
                        (when after-recording-date?
                          (sp/perform this)
                          (let [record-start-time now
                                record-end-time (+ record-start-time recording-length)
                                post-record-sleep (u/calc-post-record-sleep {:period period
                                                                             :record-start-time record-start-time
                                                                             :pre-record-sleep @pre-record-sleep
                                                                             :record-end-time record-end-time})]
                            (.log js/console "SUM OF SLEEPS: " (+ @pre-record-sleep post-record-sleep recording-length) " PERIOD: " period " (should be equal)")
                            (reset! pre-record-sleep (u/calc-pre-record-sleep {:period period
                                                                               :recording-length recording-length
                                                                               :buffer-length buffer-length}))
                            (swap! recording-date + @pre-record-sleep post-record-sleep)))))]
      (register record-fn)
      (schedule scheduler-period)))
  (perform [this]
    (let [recording (rp/start recorder {})]
      (.log js/console (str "RECORDING FOR: " recording-length " msecs"))
      (.setTimeout BackgroundTimer (fn [] (rp/stop recorder recording)) recording-length)))
  (stop [this]
    (.cancel BackgroundJob #js {:jobKey "fourThirtyThreeRecord"})))

(defn instantiate [period recording-length]
  (let [buffer-length 10000
        scheduled-recorder (map->ScheduledRecorder. {:recorder (Recorder.)
                                                     :period period
                                                     :recording-length recording-length
                                                     :buffer-length buffer-length
                                                     :pre-record-sleep (atom 0)
                                                     :recording-date (atom (tc/to-long (t/now)))})]
    scheduled-recorder))
