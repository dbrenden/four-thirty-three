(ns four-thirty-three-core.protocols.postable)

(defprotocol Postable
  (post [_ params]))
