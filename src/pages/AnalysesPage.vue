<template>
  <user>
    <template v-slot:user="{ user }">
      <analyses-data v-if="user" />
      <login-page v-else />
    </template>
  </user>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, db } from "../firebase";
import User from "../components/User.vue";
import LoginPage from "./LoginPage.vue";
import AnalysesData from "../components/AnalysesData.vue";

export default defineComponent({
  name: "Analyses",
  components: {
    User,
    LoginPage,
    AnalysesData
  }
});
</script>

<style></style>
