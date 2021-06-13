<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { auth } from "../../firebase";
import { user } from "../../composables/user";

export default defineComponent({
  name: "User",
  setup() {
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => (user.value = firebaseUser)
    );

    return {
      user,
      unsubscribe
    };
  },
  umounted() {
    this.unsubscribe();
  }
});
</script>

<style></style>
