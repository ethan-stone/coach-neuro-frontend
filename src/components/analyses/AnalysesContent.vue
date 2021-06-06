<template>
  <div class="h-screen w-full flex overflow-hidden">
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
import { auth, db } from "../../firebase";
import AnalysesGrid from "./AnalysesGrid.vue";
import AnalysesSidebar from "./AnalysesSidebar.vue";
import NewAnalysisModal from "./AnalysisCreateModal.vue";

export default defineComponent({
  name: "Analyses",
  components: {
    AnalysesGrid,
    AnalysesSidebar,
    NewAnalysisModal
  },
  async setup() {
    const isAnalysisModalToggled = ref(false);
    const analyses = ref([]);

    function toggleAnalysisModal() {
      isAnalysisModalToggled.value = true;
    }

    const usersAnalysesQuery = db
      .collection("analyses")
      .where("owner", "==", auth.currentUser.uid);

    await usersAnalysesQuery
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          analyses.value.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((error) => {
        console.error(error);
      });

    return {
      isAnalysisModalToggled,
      toggleAnalysisModal,
      analyses
    };
  }
});
</script>

<style></style>
