<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    bgColor: {
      type: String,
      default: "blue"
    },
    bgIntensity: {
      type: String,
      default: "500"
    },
    size: {
      type: String,
      default: "md"
    },
    rounded: {
      type: String,
      default: "none"
    }
  },
  setup(props) {
    props = reactive(props);

    const computedBgProperty = computed(() => {
      if (props.bgColor === "white" || props.bgColor === "black") {
        return "bg-" + props.bgColor;
      }
      return "bg-" + props.bgColor + "-" + props.bgIntensity;
    });

    const computedSize = computed(() => {
      if (props.size === "sm") {
        return "py-2 px-4";
      }
      if (props.size === "md") {
        return "py-4 px-8";
      }
      if (props.size === "lg") {
        return "py-8 px-16";
      }
    });

    const computedRounded = computed(() => {
      if (props.rounded === "sm") {
        return "rounded-sm";
      }
      if (props.rounded === "md") {
        return "rounded";
      }
      if (props.rounded === "lg") {
        return "rounded-md";
      }
      if (props.rounded === "xl") {
        return "rounded-lg";
      }
    });

    const computedRing = computed(() => {
      return "focus:ring-" + props.bgColor + "-" + props.bgIntensity;
    });

    return {
      classes: computed(() => {
        return [
          computedRounded.value,
          computedSize.value,
          computedBgProperty.value,
          "w-" + props.width,
          "rounded-" + props.rounded,
          "focus:outline-none",
          "focus:ring-2",
          computedRing.value,
          "focus:ring-opacity-50"
        ];
      })
    };
  }
});
</script>

<style></style>
