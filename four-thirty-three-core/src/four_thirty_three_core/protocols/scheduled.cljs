(ns four-thirty-three-core.protocols.scheduled)

(defprotocol Scheduled
  (init [this])
  (perform [this])
  (sleep [this])
  (stop [this]))
