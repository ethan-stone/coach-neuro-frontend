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
    <card-table :cards="cardDatas"></card-table>
  </div>
</template>

<script>
import CardTable from "../CardTable.vue";
import AnalysesPageSidebar from "../AnalysesPageSidebar.vue";
import NewAnalysisModal from "../NewAnalysisModal.vue";

export default {
  name: "Analyses",
  components: {
    CardTable,
    AnalysesPageSidebar,
    NewAnalysisModal
  },
  data() {
    return {
      isAnalysisModalToggled: false,
      cardDatas: []
    };
  },
  methods: {
    toggleAnalysisModal() {
      this.isAnalysisModalToggled = true;
    },
    createAnalysis(analysisData) {
      // {
      //     imgSrcUrl:
      //       "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      //     cardName: "Card Name",
      //     sportCategory: "Basketball Front",
      //     cardSummary: [
      //       {
      //         color: "red",
      //         bgIntensity: 400,
      //         textIntensity: 900,
      //         itemHeader: "Elbow",
      //         itemText: "Item Text 1"
      //       },
      //       {
      //         color: "green",
      //         bgIntensity: 400,
      //         textIntensity: 900,
      //         itemHeader: "Stance",
      //         itemText: "Item Text 2"
      //       },
      //       {
      //         color: "yellow",
      //         bgIntensity: 400,
      //         textIntensity: 900,
      //         itemHeader: "Stance",
      //         itemText: "Item Text 2"
      //       }
      //     ],
      //     cardDetailLink: "https://www.digitalocean.com/"
      //   }
      this.cardDatas.push({
        imgSrcUrl:
          "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
        cardName: analysisData.newAnalysisName,
        sportCategory: analysisData.optionName,
        cardSummary: [
          {
            color: "red",
            bgIntensity: 400,
            textIntensity: 900,
            itemHeader: "Elbow",
            itemText: "Item Text 1"
          },
          {
            color: "green",
            bgIntensity: 400,
            textIntensity: 900,
            itemHeader: "Stance",
            itemText: "Item Text 2"
          },
          {
            color: "yellow",
            bgIntensity: 400,
            textIntensity: 900,
            itemHeader: "Stance",
            itemText: "Item Text 2"
          }
        ],
        cardDetailLink: "https://www.digitalocean.com/"
      });
    }
  }
};
</script>

<style></style>
