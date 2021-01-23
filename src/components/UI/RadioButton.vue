<template>
  <button
    class="w-3 h-3 border border-gray-400 rounded focus:outline-none"
    :class="{'bg-black': isSelected}"
    @click="emitUpdateSelectedRadioButtonEvent"
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
  setup(props, ctx) {
    function emitUpdateSelectedRadioButtonEvent() {
      if (!props.isSelected) {
        console.log(props.optionName)
        ctx.emit("update-radio-buttons", props.optionName)
      }
    }

    return {
      emitUpdateSelectedRadioButtonEvent
    }
  }
};
</script>

<style></style>
