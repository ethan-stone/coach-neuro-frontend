<template>
  <div class="grid place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form class="mt-48">
        <label
          for="email"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Username</label
        >
        <input
          v-model="email"
          id="email"
          type="email"
          name="email"
          placeholder="email"
          autocomplete="email"
          class="block w-full p-3 mt-2 rounded text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <label
          for="password"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Password</label
        >
        <input
          v-model="password"
          id="password"
          type="password"
          name="password"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 rounded text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="button"
          class="w-full py-3 mt-6 font-medium tracking-widest rounded text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          @click="login"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { useStore } from "vuex";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const store = useStore();

    const email = ref("");
    const password = ref("");

    async function login() {
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((_) => {
          console.log("User successfully signed in ");
          router.push("/analyses");
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return {
      email,
      password,
      login
    };
  }
});
</script>
