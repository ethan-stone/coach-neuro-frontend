<template>
  <button
    class="w-3 h-3 border border-gray-400 rounded focus:outline-none"
    :class="cssClass"
    @click="emitUpdateSelectRadioButtonEvent"
  ></button>
  <span class="ml-2">{{ optionName }}</span>
</template>

<script>
export default {
  name: "RadioButton",
  emits: ["update-radio-buttons"],
  props: {
    optionName: String,
    isSelected: Boolean
  },
  methods: {
    emitUpdateSelectRadioButtonEvent() {
      if (!this.isSelected) {
        this.$emit("update-radio-buttons", this.optionName);
        console.log("updating radio buttons");
      }
    }
  },
  computed: {
    cssClass() {
      if (this.isSelected) {
        return ["bg-black"];
      }
    }
  }
};
</script>

<style></style>
