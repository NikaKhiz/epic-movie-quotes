<script setup>
import IconPhoto from "@/components/icons/IconPhoto.vue";
import { Field, ErrorMessage, useField } from "vee-validate";
import { computed, ref } from "vue";
// import axios from "@/plugins/axios";
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "file",
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
});

const mobileDimensions = computed(() => {
  return window.innerWidth <= 768;
});
const field = useField(props.name, props.rules);
const hasError = computed(() => {
  return !field.meta.valid && field.meta.touched;
});
const hasNotError = computed(() => {
  return field.meta.valid && field.meta.touched;
});

const thumbnail = ref({
  files: {},
  fileUrl: "",
});

const isFileHandled = ref(false);
const isDragging = ref(false);

const dragOver = () => {
  isDragging.value = true;
};
const dragLeave = () => {
  isDragging.value = false;
};
const dropItem = (e) => {
  thumbnail.value.files = e.dataTransfer.files;
  thumbnail.value.fileUrl = URL.createObjectURL(thumbnail.value.files[0]);
  isDragging.value = false;
  isFileHandled.value = true;
};
const handleFileChange = (e) => {
  thumbnail.value.files = e.target.files;
  thumbnail.value.fileUrl = URL.createObjectURL(thumbnail.value.files[0]);
  isFileHandled.value = true;
};
</script>
<template>
  <div class="flex flex-col gap-2">
    <div
      class="border-1 border-darkGray rounded-md flex items-center gap-4 w-full p-4 text-neutralWhite"
      :class="{
        'border-neutralRed': hasError,
        'border-neutralGreen': hasNotError,
        'bg-darkGray bg-opacity-10': isDragging,
        'bg-transparent': !isDragging,
      }"
      @dragover.prevent="dragOver"
      @dragleave="dragLeave"
      @drop.prevent="dropItem"
    >
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 flex items-center justify-center">
            <IconPhoto class="w-full block object-cover" />
          </div>
          <p class="text-base md:text-xl" v-if="!mobileDimensions">
            Drag & drop your image here or
          </p>
          <p class="text-base md:text-xl" v-else>Upload Image</p>
        </div>

        <label
          :for="name"
          class="min-w-max bg-neutralViolet p-2 rounded-sm cursor-pointer text-base md:text-xl"
        >
          <Field
            :type="type"
            :name="name"
            :id="name"
            :rules="rules"
            class="hidden"
            @change="handleFileChange"
          />
          Choose file
        </label>
      </div>
      <div>
        <div class="max-w-[100px] max-h-[100px]" v-if="isFileHandled">
          <img
            :src="thumbnail.fileUrl"
            alt="chosenThumbnail"
            class="w-full block object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  <ErrorMessage
    as="p"
    class="text-dullRed font-normal text-sm"
    :name="props.name"
  />
</template>
