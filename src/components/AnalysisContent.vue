<template>
  <div class="h-screen w-full">
    <video :src="downloadURL" ref="videoElementRef" crossorigin="anonymous" />
    <button @click="analyzeVideo">Analyze Video</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { auth, db, storage } from "../firebase";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

export default defineComponent({
  name: "AnalysisContent",
  setup() {
    const route = useRoute();

    const analysisData = ref({});
    const downloadURL = ref();
    const videoElementRef = ref(null);

    async function analyzeVideo() {
      console.log(videoElementRef.value);
      const net = await posenet.load();
      const pose = await net.estimateSinglePose(videoElementRef.value);
      console.log(pose);
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
      analyzeVideo
    };
  }
});
</script>

<style></style>
