<script setup>
import { destroyMovie } from "@/services/api/movies.js";
import { activateModal } from "@/utils/toggleAuthModals.js";
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { useEditMoviesStore } from "@/stores/editMoviesStore.js";
import { useRouter } from "vue-router";
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPensil from "@/components/icons/IconPensil.vue";

const props = defineProps({
  currentMovie: {
    type: Object,
    required: true,
  },
});

const authModalStore = useAuthModalStore();
const editMoviesStore = useEditMoviesStore();
const router = useRouter();

const deleteMovie = () => {
  destroyMovie(props.currentMovie.id).then(() => {
    router.push({ name: "movies" });
  });
};

const openEditting = () => {
  activateModal(authModalStore, "modalEditMovie");
  editMoviesStore.$patch(props.currentMovie);
};
</script>
<template>
  <div class="flex flex-col gap-6 md:gap-0 md:flex-row items-start mt-8">
    <div class="w-full md:w-1/2 rounded-md overflow-hidden">
      <img
        :src="currentMovie.thumbnail"
        alt="movieImg"
        class="block w-full object-cover max-h-96"
      />
    </div>
    <div class="flex flex-col md:w-1/2 gap-6 md:pl-4 text-lg">
      <div class="flex items-center justify-between">
        <p class="text-brownyWhite text-2xl">
          {{ currentMovie.title }} ({{ currentMovie.released }})
        </p>
        <div
          class="hidden md:flex items-center gap-4 bg-mediumBlack px-7 py-2 rounded-md"
        >
          <button @click="openEditting">
            <IconPensil />
          </button>
          <span class="text-darkGray">|</span>
          <button @click="deleteMovie"><IconTrash /></button>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div>
          <ul class="flex items-center gap-2">
            <li
              v-for="genre in currentMovie.genres"
              :key="genre.id"
              class="text-neutralWhite font-bold text-lg py-1 px-3 bg-darkGray rounded-md"
            >
              {{ genre.genre }}
            </li>
          </ul>
        </div>
        <p class="text-darkGray flex items-center gap-2">
          <span class="font-bold">Director:</span>
          <span class="font-medium text-neutralWhite">{{
            currentMovie.director
          }}</span>
        </p>
        <div class="text-darkGray text-lg">
          {{ currentMovie.description }}
        </div>
      </div>
    </div>
  </div>
</template>
