(ns four-thirty-three.shared.util
  (:require [cljs-time.format :as tf]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc]))

(def time-formatter (tf/formatters :basic-date-time-no-ms))

(defn gen-timestamp
  [datetime]
  (if (number? datetime)
    (tf/unparse time-formatter (tc/from-long datetime))
    (tf/unparse time-formatter datetime)))
