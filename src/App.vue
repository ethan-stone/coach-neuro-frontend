<template>
  <base-card
    :imgSrcUrl="cardDatas[0].imgSrcUrl"
    :cardName="cardDatas[0].cardName"
    :sportCategory="cardDatas[0].sportCategory"
    :cardSummary="cardDatas[0].cardSummary"
    :cardDetailLink="cardDatas[0].cardDetailLink"
  >
  </base-card>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
import ColoredListItem from "./components/ColoredListItem.vue";

export default {
  name: "App",
  components: {
    BaseCard,
    ColoredListItem
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
        }
      ]
    };
  }
};
</script>

<style></style>
