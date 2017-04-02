(ns four-thirty-three-core.core
  (:require [clojure.spec :as s]
            [cljs.core.async :as a]
            [four-thirty-three-core.protocols :as p]
            [four-thirty-three-core.recorder :as rec]
            [four-thirty-three-core.uploader :as up]
            [four-thirty-three-core.poster :as pst])
  (:require-macros [gracilius.core :refer [defprop]]))

(defprop chan-size :chan-size 100)

(s/def ::recorder #(satisfies? p/Recordable %))
(s/def ::uploader #(satisfies? p/Uploadable %))
(s/def ::poster #(satisfies? p/Postable %))

(s/fdef init
        :args (s/and (s/cat :period int?
                            :recording-length int?
                            :recorder ::recorder
                            :uploader ::uploader
                            :poster ::poster)
                     #(> (:period %) (:recording-length %))))

(defn init [period recording-length recorder uploader poster]
  (let [recordings> (a/chan (chan-size))
        stop-fn (rec/init-record-loop recordings> period recording-length recorder)]
    (-> recordings>
        (up/init-upload-loop uploader)
        (pst/init-post-loop poster))
    stop-fn))
