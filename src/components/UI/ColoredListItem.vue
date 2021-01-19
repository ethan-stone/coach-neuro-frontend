<template>
  <li class="inset-x-0 text-sm mx-2 mt-2 rounded-sm" :class="cssClass">
    <p class="mx-1 font-bold">{{ itemHeader }}</p>
    <p class="mx-1">{{ itemText }}</p>
  </li>
</template>

<script>
export default {
  name: "ColoredListItem",
  props: {
    color: String,
    bgIntensity: Number,
    textIntensity: Number,
    itemHeader: String,
    itemText: String
  },
  computed: {
    cssClass() {
      return [
        "bg-" + this.color + "-" + this.bgIntensity,
        "text-" + this.color + "-" + this.textIntensity
      ];
    }
  }
};
</script>

<style></style>
