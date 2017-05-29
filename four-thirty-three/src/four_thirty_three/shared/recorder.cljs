(ns four-thirty-three.shared.recorder
  (:require [four-thirty-three-core.protocols.recordable :as rp]
            [cljs-time.core :as t]))

(def Audio (js/require "react-native-audio"))
(def AudioRecorder (.-AudioRecorder Audio))
(def AudioUtils (.-AudioUtils Audio))
(def PermissionsAndroid (.-PermissionsAndroid (js/require "react-native")))

(defn generate-audio-path
  []
  (str (.-MusicDirectoryPath AudioUtils) "/" (t/now) ".acc"))

(defn check-permission
  []
  (let [rationale #js {:title "Microphone Permission"
                       :message "433 needs access to your microphone so you can record audio."}]
    (-> (.request PermissionsAndroid (aget PermissionsAndroid "PERMISSIONS" "RECORD_AUDIO") rationale)
        (.then (fn [result] (.log js/console "Permission result: " result)
                 (or (true? result) (= result (aget PermissionsAndroid "RESULTS" "GRANTED"))))))))

(defrecord Recorder []
  rp/Recordable
  (start [_ params]
    (let [{:keys [path sample-rate audio-quality audio-encoding channels]} params]
      (.log js/console "STARTING RECORDING")
      (-> (check-permission)
          (.then (fn [has-permission]
                   (when has-permission
                     (.log js/console "Preparing Recording Path")
                     (-> (.prepareRecordingAtPath AudioRecorder
                                                  (or path (generate-audio-path))
                                                  #js {:SampleRate (or sample-rate 44100)
                                                       :AudioQuality (or audio-quality "High")
                                                       :AudioEncoding (or audio-encoding "aac")
                                                       :Channels (or channels 1)})
                         (.then (fn [x]
                                  (.log js/console "Starting recording! " x)
                                  (.startRecording AudioRecorder))))))))))
  (stop [_ params]
    (.log js/console "STOPPING RECORDING")
    (-> (.stopRecording AudioRecorder)
        (.then (fn [x] (.log js/console "Stopped Recording: " x))))))
