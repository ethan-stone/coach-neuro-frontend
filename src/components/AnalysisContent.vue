<template>
  <div class="h-screen w-full">
    <video :src="downloadURL"></video>
    <img :src="downloadURL" />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { auth, db, storage } from "../firebase";

export default defineComponent({
  name: "AnalysisContent",
  setup() {
    const route = useRoute();
    const analysisData = ref({});
    const downloadURL = ref();

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
      downloadURL
    };
  }
});
</script>

<style></style>
