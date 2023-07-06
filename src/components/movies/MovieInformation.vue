<script setup>
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPensil from "@/components/icons/IconPensil.vue";
import { toRefs } from "vue";

const props = defineProps({
  currentMovie: {
    type: Object,
    required: true,
  },
});

const { title, director, released, genres, movieImg, description } = toRefs(
  props.currentMovie
);
</script>
<template>
  <div class="flex flex-col gap-6 md:gap-0 md:flex-row items-start mt-8">
    <div class="md:w-1/2 rounded-md max-h-[400px]">
      <img :src="movieImg" alt="movieImg" class="block w-full object-cover" />
    </div>
    <div class="flex flex-col md:w-1/2 gap-6 md:pl-4 text-lg">
      <div class="flex items-center justify-between">
        <p class="text-brownyWhite text-2xl">{{ title }} ({{ released }})</p>
        <div
          class="hidden md:flex items-center gap-4 bg-mediumBlack px-7 py-2 rounded-md"
        >
          <button><IconPensil /></button>
          <span class="text-darkGray">|</span>
          <button><IconTrash /></button>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div>
          <ul class="flex items-center gap-2">
            <li
              v-for="genre in genres"
              :key="genre"
              class="text-neutralWhite font-bold text-lg py-1 px-3 bg-darkGray rounded-md"
            >
              {{ genre }}
            </li>
          </ul>
        </div>
        <p class="text-darkGray flex items-center gap-2">
          <span class="font-bold">Director:</span>
          <span class="font-medium text-neutralWhite">{{ director }}</span>
        </p>
        <div class="text-darkGray text-lg">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
