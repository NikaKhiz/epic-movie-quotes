<script setup>
import { computed, onMounted } from "vue";
import { Form } from "vee-validate";
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { deactivateModal } from "@/utils/toggleAuthModals.js";
import { useUserStore } from "@/stores/userStore.js";
import { useAddMoviesStore } from "@/stores/addMoviesStore.js";
import { addMovie } from "@/services/api/movies.js";
import { useGenresStore } from "@/stores/genresStore.js";
import { getGenres } from "@/services/api/genres.js";
import { getMovies } from "@/services/api/movies.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import IconExit from "@/components/icons/IconExit.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import InputTextMovie from "@/components/ui/InputTextMovie.vue";
import InputFile from "@/components/ui/InputFile.vue";
import InputCheckboxAddGenres from "@/components/ui/InputCheckboxAddGenres.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";

const genresStore = useGenresStore();
onMounted(() => {
  getGenres().then((response) => {
    genresStore.genres = response.data.data;
  });
});
const userStore = useUserStore();
const addMoviesStore = useAddMoviesStore();
const authModalStore = useAuthModalStore();
const moviesStore = useMoviesStore();

const { userName, userImg } = userStore;

const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalAddMovie";
});
const onOutsideClick = () => {
  return deactivateModal(authModalStore);
};

const createMovie = (values) => {
  addMoviesStore.thumbnail = values.thumbnail;
  const genres = addMoviesStore.genres.map((item) => item.id);
  const {
    title,
    title_ka,
    released,
    director,
    director_ka,
    description,
    description_ka,
    thumbnail,
  } = addMoviesStore;

  addMovie(
    title,
    title_ka,
    genres,
    released,
    director,
    director_ka,
    description,
    description_ka,
    thumbnail
  ).then(() => {
    deactivateModal(authModalStore);
    getMovies().then((response) => {
      moviesStore.movies = response.data.movies;
    });
  });
};
</script>
<template>
  <transition
    appear
    enter-from-class="opacity-0"
    enter-active-class="transition-all"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-active-class="transition-all"
    leave-to-class="opacity-0"
  >
    <div
      class="fixed top-0 left-0 bottom-0 right-0 bg-darkBlack bg-opacity-50 overflow-y-auto"
      v-if="isModalOpen"
    >
      <div
        class="flex flex-col gap-10 w-full md:max-w-4xl mx-auto bg-darkBlack text-neutralWhite my-0 md:my-20 rounded-lg"
        v-click-outside="onOutsideClick"
      >
        <div class="flex flex-col gap-4 md:gap-7 text-xl">
          <div class="border-b-1 border-neutralGray border-opacity-30">
            <div class="flex items-center justify-between px-9 py-6">
              <div></div>
              <p class="font-medium text-xl md:text-2xl capitalize">
                Add movie
              </p>
              <div
                class="cursor-pointer w-4 h-4 flex items-center justify-center"
                @click="onOutsideClick"
              >
                <IconExit class="w-full object-cover block" />
              </div>
            </div>
          </div>
          <div class="px-9 pb-9 flex flex-col gap-7">
            <div class="flex items-center gap-4">
              <div
                class="w-10 md:w-14 rounded-full overflow-hidden border-1 border-transparent"
              >
                <img
                  :src="userImg"
                  alt="userImg"
                  class="w-full block object-cover"
                />
              </div>
              <p class="capitalize text-xl">{{ userName }}</p>
            </div>
            <Form class="flex flex-col gap-4 md:gap-6" @submit="createMovie">
              <InputTextMovie
                name="title"
                rules="required|alpha_spaces|min:6|max:255"
                lang="Eng"
                placeholder="Movie Name"
                v-model="addMoviesStore.title"
              />
              <InputTextMovie
                name="title_ka"
                rules="required|alpha_georgian|min:6|max:255"
                lang="ქარ"
                placeholder="ფილმის სახელი"
                v-model="addMoviesStore.title_ka"
              />
              <InputTextMovie
                name="released"
                rules="required|numeric|min:4|max:4"
                placeholder="წელი/Year"
                v-model="addMoviesStore.released"
              />
              <InputCheckboxAddGenres
                :genres="genresStore.genres"
                rules="required"
                name="genre"
              />
              <InputTextMovie
                name="director"
                rules="required|alpha_spaces|min:6|max:255"
                lang="Eng"
                placeholder="director"
                v-model="addMoviesStore.director"
              />
              <InputTextMovie
                name="director_ka"
                rules="required|alpha_georgian|min:6|max:255"
                lang="ქარ"
                placeholder="რეჟისორი"
                v-model="addMoviesStore.director_ka"
              />
              <InputTextarea
                name="description"
                rules="required|alpha_spaces|min:6|max:255"
                label="Movie Description"
                lang="Eng"
                v-model="addMoviesStore.description"
              />
              <InputTextarea
                name="description_ka"
                rules="required|alpha_georgian|min:6|max:255"
                label="ფილმის აღწერა"
                lang="ქარ"
                v-model="addMoviesStore.description_ka"
              />
              <InputFile name="thumbnail" type="file" rules="required|image" />
              <ButtonPrimary size="small">Add Movie</ButtonPrimary>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
