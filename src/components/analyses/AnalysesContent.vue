<template>
  <div>
    <div v-if="!isLoading" class="h-screen w-full flex overflow-hidden">
      <analyses-sidebar @open-modal="toggleAnalysisModal" />
      <new-analysis-modal
        v-if="isAnalysisModalToggled"
        @close-modal="isAnalysisModalToggled = false"
      />
      <analyses-grid :analyses="analyses" />
    </div>
    <div v-else>Loading</div>
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
  setup() {
    const isAnalysisModalToggled = ref(false);
    const analyses = ref([]);
    const isLoading = ref(true);

    function toggleAnalysisModal() {
      isAnalysisModalToggled.value = true;
    }

    const usersAnalysesQuery = db
      .collection("analyses")
      .where("owner", "==", auth.currentUser.uid);

    async function fetchUsersAnalyses() {
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
      isLoading.value = false;
    }

    fetchUsersAnalyses();
    return {
      isAnalysisModalToggled,
      toggleAnalysisModal,
      analyses,
      isLoading
    };
  }
});
</script>

<style></style>
