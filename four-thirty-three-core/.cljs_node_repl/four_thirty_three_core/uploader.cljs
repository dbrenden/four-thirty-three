(ns four-thirty-three-core.uploader
  (:require [cljs.core.async :as a]
            [four-thirty-three-core.protocols :as p]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gracilius.core :refer [defprop]]))

(defprop chan-size :chan-size 100)

(defn init-upload-loop
  [recordings< uploader]
  (let [output> (a/chan (chan-size))]
    (go
      (loop []
        (when-let [recording (a/<! recordings<)]
          (p/upload uploader {})
          (a/>! output> recording)
          (recur)))
      (do (println "Shutting down upload")
          (a/close! output>)))
    output>))
