<template>
  <div
    class="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <div
      class="p-4 bg-white rounded-lg shadow-lg relative w-96 md:w-2/3 lg:w-1/2"
      v-click-away="emitCloseModalEvent"
    >
      <p class="border-b pb-4 text-center text-gray-700 font-bold text-2xl">
        New Analysis
      </p>
      <label class="block text-gray-600 text-sm font-semibold mt-2" for="title"
        >Analysis Title</label
      >
      <input
        v-model="newAnalysisName"
        class="bg-gray-100 appearance-none border focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight"
        id="title"
        type="text"
        name="analysis-name"
        autocomplete="off"
        placeholder="Analysis Title"
      />
      <label class="block text-gray-600 text-sm font-semibold mt-4" for="title"
        >Select Analysis Type</label
      >
      <div class="flex flex-wrap justify-center mt-2">
        <div
          v-for="(radioButton, index) in radioButtons"
          :key="index"
          class="inline-flex items-center mr-6"
        >
          <radio-button
            :optionName="radioButton.optionName"
            :isSelected="radioButton.isSelected"
            @update-radio-buttons="updateRadioButtons"
          >
          </radio-button>
        </div>
      </div>
      <label class="block text-gray-600 text-sm font-semibold mt-4" for="title"
        >Select File</label
      >
      <div class="w-full mt-2">
        <div
          class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
        >
          <div class="absolute">
            <div class="flex flex-col items-center">
              <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
              <span class="block text-gray-400 font-normal">Drag</span>
              <span class="block text-gray-400 font-normal">or</span>
              <span class="block font-bold text-black">Browse Files</span>
            </div>
          </div>
          <input
            class="h-full w-full opacity-0"
            ref="file"
            type="file"
            name=""
          />
        </div>
      </div>
      <div class="mt-3 text-center pb-3">
        <button
          class="w-full h-12 text-lg rounded bg-gradient-to-r from-gray-300 via-gray-700 to-gray-300 text-white"
          @click="createAnalysis"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { auth, db, storage } from "../firebase";
import { nanoid } from "nanoid";
import { useRouter } from "vue-router";
import BaseDropdown from "./UI/BaseDropdown.vue";
import RadioButton from "./UI/RadioButton.vue";

export default defineComponent({
  name: "NewAnalysisModal",
  components: { BaseDropdown, RadioButton },
  emits: ["close-modal", "create-analysis"],
  setup(_, ctx) {
    const newAnalysisName = ref("");
    const file = ref(null);
    const router = useRouter();

    const radioButtons = ref([
      {
        optionName: "basketball",
        isSelected: false
      },
      {
        optionName: "jumping",
        isSelected: false
      }
    ]);

    function updateRadioButtons(optionName) {
      radioButtons.value.forEach((e) => {
        if (e.optionName === optionName) {
          e.isSelected = true;
        } else {
          e.isSelected = false;
        }
      });
    }

    function emitCloseModalEvent() {
      ctx.emit("close-modal");
    }

    async function createAnalysis() {
      const { optionName, ...rest } = radioButtons.value.find((e) => {
        return e.isSelected;
      });

      var storageRef = storage.ref();

      var fileName = file.value.files[0].name;
      var videoId = nanoid();
      var videoRef = storageRef.child(
        auth.currentUser.uid + "/" + videoId + "." + fileName.split(".").pop()
      );

      videoRef
        .put(file.value.files[0])
        .then((snapshot) => {
          var videoPath = snapshot.metadata.fullPath;
          db.collection("users")
            .doc(auth.currentUser.uid)
            .collection("analyses")
            .add({
              name: newAnalysisName.value,
              category: optionName,
              videoPath: videoPath
            })
            .then((docRef) => {
              console.log("New analysis created with ID: ", docRef.id);
              emitCloseModalEvent();
              router.push("/analysis/" + docRef.id);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return {
      newAnalysisName,
      radioButtons,
      updateRadioButtons,
      emitCloseModalEvent,
      createAnalysis,
      file
    };
  }
});
</script>
