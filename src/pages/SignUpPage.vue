<template>
  <div class="grid place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <form class="mt-24">
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
          for="email"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          v-model="email"
          id="email"
          type="email"
          name="email"
          placeholder="john.doe@company.com"
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
        <label
          for="password-confirm"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Confirm password</label
        >
        <input
          v-model="passwordConfirm"
          id="password-confirm"
          type="password"
          name="password-confirm"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 rounded text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="button"
          class="w-full py-3 mt-6 font-medium tracking-widest rounded text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          @click="signup"
        >
          Sign up
        </button>
        <p
          class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
        >
          Already registered?
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { auth, db } from "../firebase";

export default defineComponent({
  name: "SignUpPage",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirm = ref("");

    function signup() {
      if (password.value !== passwordConfirm.value) {
        console.log("Invalid password");
      } else {
        auth
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((userCredentials) => {
            var user = userCredentials.user;
            db.collection("users")
              .doc(user.uid)
              .set({
                username: username.value
              })
              .then(() => {
                console.log("User successfully created");
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }

    return {
      username,
      email,
      password,
      passwordConfirm,
      signup
    };
  }
});
</script>

<style></style>
