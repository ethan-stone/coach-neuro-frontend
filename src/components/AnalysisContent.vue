<template>
  <div class="h-screen w-full">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-10 p-10">
      <video
        :src="downloadURL"
        ref="videoElementRef"
        crossorigin="anonymous"
        autoplay
        muted="true"
        class="bg-black p-1 rounded col-span-2"
      />
      <div class="grid grid-cols-1 gap-10">
        <div class="self-center">
          <p class="pr-2 text-lg font-bold">Elbow</p>
          <div
            class="h-6 bg-gradient-to-r from-green-200 to-green-700 rounded-lg"
            style="width: 100%"
          ></div>
        </div>
        <div class="self-center">
          <p class="pr-2 text-lg font-bold">Legs</p>
          <div
            class="h-6 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-lg"
            style="width: 66%"
          ></div>
        </div>
        <div class="self-center">
          <p class="pr-2 text-lg font-bold">wefwef</p>
          <div
            class="h-5 bg-gradient-to-r from-red-200 to-red-600 rounded-lg"
            style="width: 33%"
          ></div>
        </div>
      </div>
      <div class="flex md:col-span-full justify-center">
        <button
          @click="estimateVideoPoses"
          class="m-auto p-3 bg-black text-white rounded"
        >
          Analyze Video
        </button>
      </div>
    </div>
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
