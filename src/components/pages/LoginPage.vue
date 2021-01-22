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
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "LoginPage",
  setup() {
    const username = ref("")
    const password = ref("")

    function login() {
      fetch(`${import.meta.env.VITE_API_ROOT}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          username.value = "";
          password.value = "";
        });
    }

    return {
      username,
      password,
      login
    }
  },
};
</script>
