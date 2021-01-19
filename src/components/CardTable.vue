<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap w-full">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="my-2 p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <base-card
          :imgSrcUrl="card.imgSrcUrl"
          :cardName="card.cardName"
          :sportCategory="card.sportCategory"
          :cardSummary="card.cardSummary"
          :cardDetailLink="card.cardDetailLink"
        ></base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";

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
