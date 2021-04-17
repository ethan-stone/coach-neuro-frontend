<template>
  <div class="grid" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import "../index.css";

export default defineComponent({
  name: "Grid",
  props: {
    colsSmall: {
      type: String,
      required: true
    },
    colsMedium: {
      type: String,
      required: true
    },
    colsLarge: {
      type: String,
      required: true
    },
    gap: {
      type: String,
      default: 0
    }
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => {
        return [
          "grid-cols-" + props.colsSmall,
          "md:grid-cols-" + props.colsMedium,
          "lg:grid-cols-" + props.colsLarge,
          "gap-" + props.gap
        ];
      })
    };
  }
});
</script>
