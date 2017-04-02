(ns four-thirty-three-core.recorder
  (:require [cljs.core.async :as a]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]            )
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn init-record-loop [output> period recording-length recorder]
  (let [stop< (a/chan)]
    (go
      (loop [post-sleep 0]
        (if-not (a/poll! stop<)
          (let [start (tc/to-long (t/now))
                timeout-length (rand-int (- period recording-length 20000))]
            (println "STARTING TIMEOUT: " {:period period
                                           :recording-length recording-length
                                           :timeout-length timeout-length})
            (a/<! (a/timeout timeout-length))
            (let [recording (p/start recorder {})]
              (a/<! (a/timeout recording-length))
              (a/>! output> (p/stop recorder recording)))
            (let [post-record-timeout-length (- period (- (tc/to-long (t/now)) start))]
              (println "POST-RECORD-SLEEP: " {:post-record-timeout-length post-record-timeout-length})
              (a/<! (a/timeout post-record-timeout-length))
              (println "RECURRING: " {:period period
                                      :time-in-loop (- (tc/to-long (t/now)) start)})
              (recur)))
          (do (println "Shutting down recording")
              (a/close! output>)))))
    (fn [] (go (a/>! stop< true)))))
