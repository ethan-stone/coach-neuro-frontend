<template>
  <div
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <!-- modal -->
    <div
      class="bg-white rounded shadow-lg w-1/4"
      v-click-away="emitCloseModalEvent"
    >
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Modal Title</h3>
        <button class="text-black close-modal" @click="emitCloseModalEvent">
          &cross;
        </button>
      </div>
      <!-- modal body -->
      <div class="px-6 py-4">
        <!-- Email Input -->
        <label class="block text-xs font-semibold text-gray-600 uppercase"
          >Name</label
        >
        <input
          id="analysis-name"
          type="text"
          name="analysis-name"
          placeholder="Analysis Name"
          class="block w-full px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
        />
        <label class="block text-xs font-semibold text-gray-600 uppercase mt-6"
          >Category</label
        >
        <div class="mt-2">
          <label
            v-for="(radioButton, index) in radioButtons"
            :key="index"
            class="inline-flex items-center mr-6"
          >
            <radio-button
              :optionName="radioButton.optionName"
              :isSelected="radioButton.isSelected"
              @update-radio-buttons="updateRadioButtons"
            ></radio-button>
          </label>
        </div>
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button
          class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal"
          @click="emitCloseModalEvent"
        >
          Cancel
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
        >
          Oke
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDropdown from "./BaseDropdown.vue";
import RadioButton from "./RadioButton.vue";

export default {
  name: "NewAnalysisModal",
  emits: ["close-modal"],
  data() {
    return {
      radioButtons: [
        {
          optionName: "basketball",
          isSelected: false
        },
        {
          optionName: "jumping",
          isSelected: false
        }
      ]
    };
  },
  components: { BaseDropdown, RadioButton },
  methods: {
    emitCloseModalEvent() {
      this.$emit("close-modal");
    },
    updateRadioButtons(optionName) {
      this.radioButtons.forEach((e) => {
        if (e.optionName === optionName) {
          e.isSelected = true;
        } else {
          e.isSelected = false;
        }
      });
    }
  }
};
</script>
