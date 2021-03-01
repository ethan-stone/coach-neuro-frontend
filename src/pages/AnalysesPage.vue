<template>
  <div class="h-screen w-full flex overflow-hidden">
    <analyses-page-sidebar
      @open-modal="toggleAnalysisModal"
    ></analyses-page-sidebar>
    <new-analysis-modal
      v-if="isAnalysisModalToggled"
      @close-modal="isAnalysisModalToggled = false"
      @create-analysis="createAnalysis"
    ></new-analysis-modal>
    <card-table :cards="analyses"></card-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardTable from "../components/CardTable.vue";
import AnalysesPageSidebar from "../components/AnalysesPageSidebar.vue";
import NewAnalysisModal from "../components/NewAnalysisModal.vue";
import Analysis from "../interfaces/analysis";
import { useStore } from "vuex";

export default defineComponent({
  name: "Analyses",
  components: {
    CardTable,
    AnalysesPageSidebar,
    NewAnalysisModal
  },
  async setup() {
    const store = useStore();

    const isAnalysisModalToggled = ref(false);

    function toggleAnalysisModal() {
      isAnalysisModalToggled.value = true;
    }

    store.dispatch("fetchAnalyses");

    // function createAnalysis(analysis: Analysis) {
    //   fetch(`${import.meta.env.VITE_API_ROOT}/analyses/`, {
    //     method: "POST",
    //     headers: {
    //       Authorization: "Token " + accessToken.value,
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(analysis)
    //   });
    // }

    return {
      isAnalysisModalToggled,
      toggleAnalysisModal,
      analyses: store.getters.analyses
    };
  }
});
</script>

<style></style>
