<template>
  <nav
    class="flex flex-col bg-white dark:bg-gray-900 w-80 px-12 pt-4 pb-6 border-r-2"
  >
    <button
      class="mt-8 flex items-center justify-between py-3 px-2 text-white dark:text-gray-200 bg-green-400 dark:bg-green-500 rounded-lg shadow"
    >
      <!-- Action -->
      <span>New Analysis</span>
      <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </svg>
    </button>

    <ul class="text-gray-600">
      <!-- Links -->

      <li class="mt-8">
        <base-dropdown></base-dropdown>
      </li>
      <li class="mt-8">
        <base-dropdown></base-dropdown>
      </li>
    </ul>

    <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
      <!-- important action -->
      <a href="#home" class="flex items-center">
        <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"
          ></path>
        </svg>
        <span class="ml-2 capitalize font-medium">log out</span>
      </a>
    </div>
  </nav>
</template>

<script>
import BaseDropdown from "./BaseDropdown.vue";

export default {
  name: "ReportsPageSidebar",
  components: {
    BaseDropdown
  }
};
</script>

<style></style>
