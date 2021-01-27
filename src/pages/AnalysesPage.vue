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
import { accessToken, refreshAccessToken } from "../composables/use-auth";

export default defineComponent({
  name: "Analyses",
  components: {
    CardTable,
    AnalysesPageSidebar,
    NewAnalysisModal
  },
  async setup() {
    const isAnalysisModalToggled = ref(false);
    const analyses = ref<Analysis[]>([]);

    try {
    } catch {}
    analyses.value = await fetch(
      `${import.meta.env.VITE_API_ROOT}/users/analyses/`,
      {
        method: "GET",
        headers: {
          Authorization: "Token " + accessToken.value
        }
      }
    )
      .then((response) => response.json())
      .then((data) => data);

    function toggleAnalysisModal() {
      isAnalysisModalToggled.value = true;
    }

    function createAnalysis(analysis: Analysis) {
      fetch(`${import.meta.env.VITE_API_ROOT}/analyses/`, {
        method: "POST",
        headers: {
          Authorization: "Token " + accessToken.value,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(analysis)
      });
    }

    return {
      isAnalysisModalToggled,
      analyses,
      toggleAnalysisModal,
      createAnalysis
    };
  }
});
</script>

<style></style>
