<template>
  <the-navbar></the-navbar>
  <main>
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <span>Loading... please wait</span>
      </template>
    </Suspense>
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
