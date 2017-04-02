(ns four-thirty-three-core.core
  (:require [clojure.spec :as s]
            [cljs.core.async :as a]
            [four-thirty-three-core.protocols.scheduled :as sp]
            [four-thirty-three-core.protocols.recordable :as rp]
            [four-thirty-three-core.protocols.uploadable :as up]
            [four-thirty-three-core.protocols.postable :as pp])
  (:require-macros [gracilius.core :refer [defprop]]))

(defprop chan-size :chan-size 100)

(s/def ::scheduled-recorder #(satisfies? sp/Scheduled %))
(s/def ::scheduled-uploader #(satisfies? sp/Scheduled %))

(s/fdef init
        :args (s/keys :req-un [::scheduled-uploader ::scheduled-uploader]))

(defn init [{:keys [scheduled-uploader scheduled-recorder]}]
  (sp/init scheduled-recorder)
  (sp/init scheduled-uploader))
