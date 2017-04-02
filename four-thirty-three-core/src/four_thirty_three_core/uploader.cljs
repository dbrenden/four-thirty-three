(ns four-thirty-three-core.uploader
  (:require [cljs.core.async :as a]
            [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tc])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [gracilius.core :refer [defprop]]))

(defprop chan-size :chan-size 100)
x
(defn upload
  [uploader poster]
  (go
    (let [url (a/<! (up/upload uploader {}))]
      (pp/post poster {:url url}))))
