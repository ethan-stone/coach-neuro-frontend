<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap w-full">
      <div
        v-for="(analysis, index) in analyses"
        :key="index"
        class="my-2 p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <analysis-card
          :imgSrcUrl="analysis.imgSrcUrl"
          :cardName="analysis.cardName"
          :sportCategory="analysis.sportCategory"
          :cardSummary="analysis.cardSummary"
          :cardDetailLink="analysis.id"
        ></analysis-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AnalysisCard from "./ui/AnalysisCard.vue";

export default defineComponent({
  name: "AnalysesGrid",
  components: {
    AnalysisCard
  },
  props: {
    analyses: Array
  }
});
</script>

<style></style>
