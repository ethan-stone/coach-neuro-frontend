<template>
  <div class="grid place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form class="mt-48">
        <label
          for="username"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Username</label
        >
        <input
          v-model="username"
          id="username"
          type="username"
          name="username"
          placeholder="username"
          autocomplete="username"
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
import { ref } from "vue"
import useAuth from "../../composables/useAuth"
import { useRouter } from "vue-router"

export default {
  name: "LoginPage",
  setup() {
    const { user, accessToken, getTokenPair, refreshAccessToken } = useAuth();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    async function login() {
      const success = await getTokenPair(username.value, password.value);
      if (success) {
        router.push("/analyses")
      }
    }

    async function refresh() {
      const success = await refreshAccessToken();
      if (succuess) {
        console.log(accessToken.value)
      }
    }

    return {
      username,
      password,
      login,
      user
    }
  },
};
</script>
