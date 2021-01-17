<template>
  <the-header></the-header>
  <div class="h-screen w-full flex overflow-hidden">
    <reports-page-sidebar
      @open-modal="toggleAnalysisModal"
    ></reports-page-sidebar>
    <new-analysis-modal
      v-if="isAnalysisModalToggled"
      @close-modal="isAnalysisModalToggled = false"
      @create-analysis="createAnalysis"
    ></new-analysis-modal>
    <card-table :cards="cardDatas"></card-table>
  </div>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import ColoredListItem from "./components/ColoredListItem.vue";
import CardTable from "./components/CardTable.vue";
import ReportsPageSidebar from "./components/ReportsPageSidebar.vue";
import TheHeader from "./components/TheHeader.vue";
import NewAnalysisModal from "./components/NewAnalysisModal.vue";

export default {
  name: "App",
  components: {
    BaseCard,
    ColoredListItem,
    CardTable,
    ReportsPageSidebar,
    TheHeader,
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
      console.log(this.isAnalysisModalToggled);
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
