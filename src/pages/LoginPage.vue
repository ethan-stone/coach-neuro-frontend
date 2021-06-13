<template>
  <div class="grid place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form class="mt-48">
        <button
          type="button"
          class="
            w-full
            py-3
            mt-6
            font-medium
            tracking-widest
            rounded
            text-white
            uppercase
            bg-black
            shadow-lg
            focus:outline-none
            hover:bg-gray-900
            hover:shadow-none
          "
          @click="login"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { firebase, auth, db } from "../firebase";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();

    async function login() {
      try {
        var provider = new firebase.auth.GoogleAuthProvider();

        await auth.signInWithPopup(provider);

        router.push("/analyses");
      } catch (error) {
        console.error(error);
      }
    }

    return {
      login
    };
  }
});
</script>
