(ns four-thirty-three-core.util)

(defn calc-post-record-sleep
  [{:keys [period record-start-time record-end-time pre-record-sleep]}]
  (- period pre-record-sleep
     (- record-end-time record-start-time)))

(defn calc-pre-record-sleep
  [{:keys [period recording-length buffer-length]}]
  (rand-int (- period recording-length buffer-length)))
