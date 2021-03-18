<template>
  <div class="h-screen w-full">
    <video
      :src="downloadURL"
      ref="videoElementRef"
      crossorigin="anonymous"
      autoplay
      muted="true"
    />
    <button @click="estimateVideoPoses">Analyze Video</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { auth, db, storage } from "../firebase";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

//https://www.twilio.com/blog/pose-detection-video-tensorflow-js

export default defineComponent({
  name: "AnalysisContent",
  setup() {
    const frameRate = 20;

    const route = useRoute();

    const analysisData = ref({});
    const downloadURL = ref();
    const videoElementRef = ref(null);

    async function estimateVideoPoses() {
      const net = await posenet.load();

      async function estimateFrame(net) {
        const pose = await net.estimatePoses(videoElementRef.value, {
          decodingMethod: "single-person"
        });
        console.log(pose);
        return pose;
      }

      const intervalID = setInterval(() => {
        try {
          estimateFrame(net);
        } catch (error) {
          clearInterval(intervalID);
          alert(error);
        }
      }, Math.round(1000 / frameRate));
    }

    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("analyses")
      .doc(route.params.id)
      .get()
      .then((doc) => {
        analysisData.value = doc.data();
      })
      .then(() => {
        var storageRef = storage.ref();
        var videoRef = storageRef.child(analysisData.value.videoPath);
        videoRef.getDownloadURL().then((url) => {
          downloadURL.value = url;
          console.log(url);
        });
      });
    // watch(() => route.params, async newAnalysisData => analysisData.value = );
    return {
      analysisData,
      downloadURL,
      videoElementRef,
      estimateVideoPoses
    };
  }
});
</script>

<style></style>
