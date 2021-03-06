<template>
  <div class="h-screen w-full">
    <file-upload></file-upload>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FileUpload from "./UI/FileUpload.vue";
export default defineComponent({
  name: "AnalysisContent",
  components: { FileUpload }
});
</script>

<style></style>
