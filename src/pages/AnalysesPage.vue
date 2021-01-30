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
import useFetch from "../composables/use-fetch";

export default defineComponent({
  name: "Analyses",
  components: {
    CardTable,
    AnalysesPageSidebar,
    NewAnalysisModal
  },
  async setup() {
    const isAnalysisModalToggled = ref(false);

    const {
      response: analyses,
      error: getAnalysesError,
      fetching: isGetAnalysesFetching,
      isSuccess: isGetAnalysesSuccess,
      fetchData: fetchAnalyeses
    } = useFetch(`${import.meta.env.VITE_API_ROOT}/users/analyses/`, {
      method: "GET",
      body: ""
    });

    await fetchAnalyeses();

    if (!isGetAnalysesSuccess) {
      console.log(getAnalysesError);
    }

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
      toggleAnalysisModal,
      createAnalysis,
      analyses,
      isGetAnalysesFetching,
      isGetAnalysesSuccess
    };
  }
});
</script>

<style></style>
