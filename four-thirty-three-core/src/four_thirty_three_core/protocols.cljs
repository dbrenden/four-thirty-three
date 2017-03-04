(ns four-thirty-three-core.protocols)

(defprotocol Recordable
  (start [_ params])
  (stop [_ recording]))

(defprotocol Uploadable
  (upload [_ params]))

(defprotocol Postable
  (post [_ params]))
