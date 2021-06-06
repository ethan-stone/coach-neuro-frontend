<template>
  <div class="h-screen w-full">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-10 p-10">
      <div class="relative col-span-2">
        <canvas
          class="absolute top-0 left-0 w-full h-full z-10"
          ref="canvasRef"
        />
        <video
          :src="downloadURL"
          ref="videoElementRef"
          @ended="stopAnalyzing"
          crossorigin="anonymous"
          autoplay
          muted="true"
          class="rounded w-full h-full"
        />
      </div>
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
            class="
              h-6
              bg-gradient-to-r
              from-yellow-200
              to-yellow-500
              rounded-lg
            "
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
      <div class="grid md:col-span-full justify-center">
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
import { auth, db, storage } from "../../firebase";

//https://www.twilio.com/blog/pose-detection-video-tensorflow-js

export default defineComponent({
  name: "AnalysisContent"
});
</script>

<style></style>
