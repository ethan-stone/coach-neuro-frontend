<template>
  <user>
    <template v-slot:user="{ user }">
      <div v-if="user">
        <the-navbar></the-navbar>
        <analyses-content />
      </div>
      <login-page v-else />
    </template>
  </user>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "../components/auth/User.vue";
import LoginPage from "./LoginPage.vue";
import AnalysesContent from "../components/analyses/AnalysesContent.vue";
import TheNavbar from "../components/layout/TheNavbar.vue";

export default defineComponent({
  name: "Analyses",
  components: {
    User,
    LoginPage,
    AnalysesContent,
    TheNavbar
  }
});
</script>

<style></style>
