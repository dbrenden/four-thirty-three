(ns four-thirty-three-core.dummy
  (:require [four-thirty-three-core.protocols :as p]
            [four-thirty-three-core.core :as core]))

(defrecord Recorder []
  p/Recordable
  (start [_ params]
    (println "STARTING RECORDING")
    "recording")
  (stop [_ recording]
    (println "STOPPING RECORDING")
    recording))

(defrecord Uploader []
  p/Uploadable
  (upload [_ params]
    (println "UPLOADING TO DROPBOX")))

(defrecord Poster []
  p/Postable
  (post [_ params]
    (println "POSTING TO TVVITTER")))

(defonce stop-fn (atom nil))

(defn stop []
  (when-let [stop-fn @stop-fn]
    (stop-fn)))

(defn call-init []
  (reset! stop-fn (core/init 60000 1000 (Recorder.) (Uploader.) (Poster.)))
  nil)
