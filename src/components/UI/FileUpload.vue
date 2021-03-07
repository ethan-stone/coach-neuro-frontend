<template>
  <div class="flex flex-col bg-white rounded md:justify-center lg:flex-row">
    <div class="flex flex-col justify-between p-5 sm:p-10 md:p-44 lg:w-2/3">
      <div class="p-3">
        <div class="mb-2">
          <div
            class="relative h-80 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
          >
            <div class="absolute">
              <div class="flex flex-col items-center">
                <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                <span class="block text-gray-400 font-normal"
                  >Attach you files here</span
                >
                <span class="block text-gray-400 font-normal">or</span>
                <span class="block text-blue-400 font-normal"
                  >Browse files</span
                >
              </div>
            </div>
            <input type="file" class="h-full w-full opacity-0" ref="file" />
          </div>
        </div>
        <div class="mt-3 text-center pb-3">
          <button
            class="w-full h-12 text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded text-white"
            @click="uploadFile"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth, storage } from "../../firebase";

export default {
  name: "FileUpload",
  setup() {
    const file = ref(null);

    function uploadFile() {
      console.log(file.value.files);
      var storageRef = storage.ref();
      var videoRef = storageRef.child(
        auth.currentUser.uid + "/" + file.value.files[0].name
      );
      videoRef.put(file.value.files[0].name).then((snapshot) => {
        console.log(snapshot);
        console.log("File successfully uploaded");
      });
    }

    return {
      file,
      uploadFile
    };
  }
};
</script>

<style></style>
