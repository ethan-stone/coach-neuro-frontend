<template>
  <the-navbar></the-navbar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar
  }
};
</script>

<style></style>
