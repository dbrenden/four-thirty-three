(ns four-thirty-three-core.protocols.recordable)

(defprotocol Recordable
  (start [_ params])
  (stop [_ recording]))
