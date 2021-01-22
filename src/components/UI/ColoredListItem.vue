<template>
  <li class="inset-x-0 text-sm mx-2 mt-2 rounded-sm" 
      :class="['bg-' + color + '-' + bgIntensity, 'text-' + color + '-' + textIntensity]">
    <p class="mx-1 font-bold">{{ itemHeader }}</p>
    <p class="mx-1">{{ itemText }}</p>
  </li>
</template>

<script>
import { computed } from "vue"

export default {
  name: "ColoredListItem",
  props: {
    color: String,
    bgIntensity: Number,
    textIntensity: Number,
    itemHeader: String,
    itemText: String
  }
};
</script>

<style></style>
