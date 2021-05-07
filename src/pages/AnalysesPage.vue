<template>
  <user>
    <template v-slot:user="{ user }">
      <Suspense v-if="user">
        <analyses-content />
      </Suspense>
      <login-page v-else />
    </template>
  </user>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "../components/User.vue";
import LoginPage from "./LoginPage.vue";
import AnalysesContent from "../components/AnalysesContent.vue";

export default defineComponent({
  name: "Analyses",
  components: {
    User,
    LoginPage,
    AnalysesContent
  }
});
</script>

<style></style>
