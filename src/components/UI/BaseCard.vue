<template>
  <div class="overflow-hidden rounded shadow-lg border-2 max-h-96 max-w-80">
    <div class="photo-wrapper">
      <img class="w-12 h-12 rounded-full mx-auto mt-2" :src="imgSrcUrl" />
      <h3 class="text-center text-l text-gray-900 font-medium">
        {{ cardName }}
      </h3>
      <div class="text-center text-gray-400 text-xs font-semibold">
        {{ sportCategory }}
      </div>
    </div>
    <div>
      <ul>
        <colored-list-item
          v-for="(summaryItem, index) in cardSummary"
          :key="index"
          :color="summaryItem.color"
          :bgIntensity="summaryItem.bgIntensity"
          :textIntensity="summaryItem.textIntensity"
          :itemHeader="summaryItem.itemHeader"
          :itemText="summaryItem.itemText"
        ></colored-list-item>
      </ul>
    </div>
    <div class="inset-x-0 bottom-0">
      <a
        :href="cardDetailLink"
        class="block border-2 border-black bg-white py-2 px-2 text-black text-center rounded uppercase font-light my-2 mx-2 hover:bg-black hover:text-white hover:border-black duration-300 ease-in-out"
        >View Details</a
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ColoredListItem from "./ColoredListItem.vue";
export default defineComponent({
  name: "BaseCard",
  components: {
    ColoredListItem
  },
  props: {
    imgSrcUrl: String,
    ColoredListItemUrl: String,
    cardName: String,
    sportCategory: String,
    cardSummary: Array,
    cardDetailLink: String
  }
});
</script>

<style></style>
