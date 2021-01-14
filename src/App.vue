<template>
  <div class="h-screen w-full flex overflow-hidden">
    <the-sidebar></the-sidebar>
    <card-table :cards="cardDatas"></card-table>
  </div>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import ColoredListItem from "./components/ColoredListItem.vue";
import CardTable from "./components/CardTable.vue";
import TheSidebar from "./components/TheSidebar.vue";

export default {
  name: "App",
  components: {
    BaseCard,
    ColoredListItem,
    CardTable,
    TheSidebar
  },
  data() {
    return {
      cardDatas: [
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        },
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        },
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        },
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        },
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        },
        {
          imgSrcUrl:
            "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
          cardName: "Card Name",
          sportCategory: "Basketball Front",
          cardSummary: [
            {
              color: "red",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Elbow",
              itemText: "Item Text 1"
            },
            {
              color: "green",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            },
            {
              color: "yellow",
              bgIntensity: 100,
              textIntensity: 800,
              itemHeader: "Stance",
              itemText: "Item Text 2"
            }
          ],
          cardDetailLink: "https://www.digitalocean.com/"
        }
      ]
    };
  }
};
</script>

<style></style>
