<template>
  <button
    class="w-3 h-3 border border-gray-500 rounded"
    :class="cssClass"
    @click="emitUpdateSelectRadioButtonEvent"
  ></button>
</template>

<script>
export default {
  name: "RadioButton",
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    emitUpdateSelectRadioButtonEvent() {
      this.isSelected = true;
    }
  },
  computed: {
    cssClass() {
      if (this.isSelected) {
        return "bg-black";
      } else {
        return "";
      }
    }
  }
};
</script>

<style></style>
