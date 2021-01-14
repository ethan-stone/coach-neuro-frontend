<template>
  <div class="flex flex-wrap overflow-hidden">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="my-1 px-1 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-3 md:px-3 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/4"
    >
      <base-card
        :imgSrcUrl="card.imgSrcUrl"
        :cardName="card.cardName"
        :sportsCategory="card.sportsCategory"
        :cardSummary="card.cardSummary"
        :cardDetailLink="card.cardDetailLink"
      ></base-card>
    </div>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  name: "CardTable",
  components: {
    BaseCard
  },
  props: {
    cards: Array
  }
};
</script>

<style></style>
