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
      default: "full"
    },
    maxWidth: {
      type: String,
      default: "full"
    },
    height: {
      type: String,
      default: "full"
    },
    maxHeight: {
      type: String,
      default: "full"
    },
    shadow: {
      type: String,
      default: "none"
    }
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => {
        return [
          "w-" + props.width,
          "max-w-" + props.maxWidth,
          "h-" + props.height,
          "max-h-" + props.maxHeight,
          "shadow-" + props.shadow
        ];
      })
    };
  }
});
</script>
