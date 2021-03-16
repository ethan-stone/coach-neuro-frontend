<template>
  <user>
    <template v-slot:user="{ user }">
      <analysis-content v-if="user" />
      <login-page v-else />
    </template>
  </user>
</template>

<script>
import { defineComponent } from "vue";
import User from "../components/User.vue";
import AnalysisContent from "../components/AnalysisContent.vue";
import LoginPage from "./LoginPage.vue";
export default defineComponent({
  name: "AnalysisPage",
  components: { User, AnalysisContent, LoginPage }
});
</script>
, LoginPage
<style></style>
