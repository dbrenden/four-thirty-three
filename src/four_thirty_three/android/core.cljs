(ns four-thirty-three.android.core
  (:require-macros [rum.core :refer [defc]])
  (:require [re-natal.support :as support]
            [rum.core :as rum]))

(set! js/window.React (js/require "react"))
(def ReactNative (js/require "react-native"))

(defn create-element [rn-comp opts & children]
      (apply js/React.createElement rn-comp (clj->js opts) children))

(def app-registry (.-AppRegistry ReactNative))
(def view (partial create-element (.-View ReactNative)))
(def text (partial create-element (.-Text ReactNative)))
(def image (partial create-element (.-Image ReactNative)))
(def touchable-highlight (partial create-element (.-TouchableHighlight ReactNative)))

(def logo-img (js/require "./images/faf.png"))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(defonce app-state (atom {:greeting "how many layers of abstraction are you on"}))

(defc AppRoot < rum/cursored-watch [state]
  (view {:style {:flexDirection "column" :margin 40 :alignItems "center"}}
        (text {:style {:fontSize 30 :fontWeight "100" :marginBottom 20 :textAlign "center"}} (:greeting @state))
        (image {:source logo-img
                :style  {:width 320 :height 320 :marginBottom 30}})
        (touchable-highlight {:style   {:backgroundColor "#999" :padding 10 :borderRadius 5}
                              :onPress #(alert "Your are like a little baby\nwatch this")}
                             (text {:style {:color "white" :textAlign "center" :fontWeight "bold"}} "like, maybe 5, or 6 right now, my dude"))))

(defonce root-component-factory (support/make-root-component-factory))

(defn mount-app [] (support/mount (AppRoot app-state)))

(defn init []
  (mount-app)
  (.registerComponent app-registry "FourThirtyThree" (fn [] root-component-factory)))
