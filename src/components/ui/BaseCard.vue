<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import "../index.css";

export default defineComponent({
  name: "Card",
  props: {
    width: {
      type: String,
      default: "auto"
    },
    maxWidth: {
      type: String,
      default: "full"
    },
    height: {
      type: String,
      default: "auto"
    },
    maxHeight: {
      type: String,
      default: "full"
    },
    shadow: {
      type: String,
      default: "none"
    },
    borderThickness: {
      type: String,
      default: "none"
    },
    rounded: {
      type: String,
      default: "none"
    }
  },
  setup(props) {
    props = reactive(props);

    const computedShadow = computed(() => {
      if (props.shadow === "none") {
        return "shadow-none";
      }
      if (props.shadow === "sm") {
        return "shadow-sm";
      }
      if (props.shadow === "md") {
        return "shadow";
      }
      if (props.shadow === "lg") {
        return "shadow-md";
      }
      if (props.shadow === "xl") {
        return "shadow-lg";
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

    const computedBorderThickness = computed(() => {
      if (props.borderThickness === "none") {
        return "border-0";
      }
      if (props.borderThickness === "sm") {
        return "border";
      }
      if (props.borderThickness === "md") {
        return "border-2";
      }
      if (props.borderThickness === "lg") {
        return "border-4";
      }
      if (props.borderThickness === "xl") {
        return "border-8";
      }
    });

    return {
      classes: computed(() => {
        return [
          "w-" + props.width,
          "max-w-" + props.maxWidth,
          "h-" + props.height,
          "max-h-" + props.maxHeight,
          computedShadow.value,
          computedBorderThickness.value,
          computedRounded.value,
          "border-gray-200"
        ];
      })
    };
  }
});
</script>
