(ns four-thirty-three-core.poster
  (:require [cljs.core.async :as a]
            [four-thirty-three-core.protocols :as p]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gracilius.core :refer [defprop]]))

(defprop chan-size :chan-size 100)

(defn init-post-loop [recordings< poster]
  (go
    (loop []
      (when-let [recording (a/<! recordings<)]
        (p/post poster {})
        (recur))
      (println "Shutting down poster"))))
