(ns four-thirty-three-core.uploader
  (:require [cljs.core.async :as a]
            [four-thirty-three-core.protocols :as p]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn init-uploader-loop
  [recordings<]
  (go
    (loop []
      (when-let [recording (a/<! recordings<)]
        (println "Uploading recording")
        (recur)))
    (println "Shutting down upload")))
