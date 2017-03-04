(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'four-thirty-three-core.core
   :output-to "out/four_thirty_three_core.js"
   :output-dir "out"})
