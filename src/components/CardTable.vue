<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap w-full">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="my-1 px-1 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4"
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
