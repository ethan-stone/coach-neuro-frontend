<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "ListItem",
  props: {
    bgColor: {
      type: String,
      default: "white"
    },
    bgIntensity: {
      type: String,
      default: "500"
    },
    width: {
      type: String,
      default: "auto"
    },
    alignText: {
      type: String,
      default: "left"
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

    return {
      classes: computed(() => {
        return [
          computedRounded.value,
          computedBgProperty.value,
          "w-" + props.width,
          "text-" + props.alignText
        ];
      })
    };
  }
});
</script>

<style></style>
