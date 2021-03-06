<template>
  <div>
    <analyses-sidebar @open-modal="toggleAnalysisModal" />
    <new-analysis-modal
      v-if="isAnalysisModalToggled"
      @close-modal="isAnalysisModalToggled = false"
    />
    <analyses-grid :analyses="analyses" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { auth, db } from "../firebase";
import AnalysesGrid from "./AnalysesGrid.vue";
import AnalysesSidebar from "./AnalysesSidebar.vue";
import NewAnalysisModal from "./NewAnalysisModal.vue";

export default defineComponent({
  name: "Analyses",
  components: {
    AnalysesGrid,
    AnalysesSidebar,
    NewAnalysisModal
  },
  setup() {
    const isAnalysisModalToggled = ref(false);

    function toggleAnalysisModal() {
      isAnalysisModalToggled.value = true;
    }

    // db.collection("users")
    //   .doc(auth.currentUser.uid)
    //   .collection("analyses")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, "=>", doc.data());
    //     });
    //   });

    return {
      isAnalysisModalToggled,
      toggleAnalysisModal
    };
  }
});
</script>

<style></style>
