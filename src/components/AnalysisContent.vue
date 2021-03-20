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
import { auth, db, storage } from "../firebase";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";

//https://www.twilio.com/blog/pose-detection-video-tensorflow-js

export default defineComponent({
  name: "AnalysisContent",
  setup() {
    const frameRate = 20;
    const minConfidence = 0.0;

    const route = useRoute();

    const analysisData = ref({});
    const downloadURL = ref();
    const videoElementRef = ref(null);
    const analyzing = ref(true);
    const poses = ref([]);
    const canvasRef = ref(null);

    function stopAnalyzing() {
      analyzing.value = false;
      console.log("Analyzing = ", analyzing.value);
    }

    function drawPoint(y, x, r) {
      var ctx = canvasRef.value.getContext("2d");
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
    }

    function drawKeypoints(keypoints) {
      for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i];
        console.log(`keypoint in drawkeypoints ${keypoint}`);
        const { y, x } = keypoint.position;
        drawPoint(y, x, 10);
      }
    }

    function drawSegment(pair1, pair2, color, scale) {
      var ctx = canvasRef.value.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(pair1.x * scale, pair1.y * scale);
      ctx.lineTo(pair2.x * scale, pair2.y * scale);
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    function drawSkeleton(keypoints) {
      const color = "#FFFFFF";
      const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
        keypoints,
        minConfidence
      );

      adjacentKeyPoints.forEach((keypoint) => {
        drawSegment(keypoint[0].position, keypoint[1].position, color, 1);
      });
    }

    async function estimateVideoPoses() {
      const net = await posenet.load({
        inputResolution: {
          width: videoElementRef.value.videoWidth,
          height: videoElementRef.value.videoHeight
        }
      });

      async function estimateFrame(net) {
        const pose = await net.estimateSinglePose(videoElementRef.value);
        return pose;
      }

      const intervalID = setInterval(async () => {
        if (analyzing.value) {
          try {
            const pose = await estimateFrame(net);
            var videoWidth = videoElementRef.value.videoWidth;
            var videoHeight = videoElementRef.value.videoHeight;

            canvasRef.value.width = videoWidth;
            canvasRef.value.height = videoHeight;

            var ctx = canvasRef.value.getContext("2d");
            ctx.clearRect(0, 0, videoWidth, videoHeight);
            ctx.save();
            ctx.drawImage(videoElementRef.value, 0, 0, videoWidth, videoHeight);
            ctx.restore();
            console.log(pose.keypoints);
            drawKeypoints(pose.keypoints);
            drawSkeleton(pose.keypoints);
            poses.value.push(pose);
          } catch (error) {
            clearInterval(intervalID);
            console.error(error);
          }
        } else {
          clearInterval(intervalID);
          console.log(poses.value);
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
      estimateVideoPoses,
      analyzing,
      stopAnalyzing,
      canvasRef
    };
  }
});
</script>

<style></style>
