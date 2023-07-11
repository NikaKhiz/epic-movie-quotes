<script setup>
import IconExit from "@/components/icons/IconExit.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import InputTextMovie from "@/components/ui/InputTextMovie.vue";
import InputFile from "@/components/ui/InputFile.vue";
import InputCheckboxGenresEdit from "@/components/ui/InputCheckboxGenresEdit.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";
import { computed, onMounted } from "vue";
import { Form } from "vee-validate";
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { deactivateModal } from "@/utils/toggleAuthModals.js";
import { useUserStore } from "@/stores/userStore.js";
import { useEditMoviesStore } from "@/stores/editMoviesStore.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { updateMovie } from "@/services/api/movies.js";
import { useGenresStore } from "@/stores/genresStore.js";
import { getGenres } from "@/services/api/genres.js";
import { getMovie } from "@/services/api/movies.js";

const genresStore = useGenresStore();
onMounted(() => {
  getGenres().then((response) => {
    genresStore.genres = response.data.data;
  });
});
const userStore = useUserStore();
const editMoviesStore = useEditMoviesStore();
const authModalStore = useAuthModalStore();

const { userName, userImg } = userStore;
const moviesStore = useMoviesStore();
const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalEditMovie";
});
const onOutsideClick = () => {
  return deactivateModal(authModalStore);
};

const editMovie = (values) => {
  editMoviesStore.thumbnail = values.thumbnail;
  const genres = editMoviesStore.genres.map((item) => item.id);
  updateMovie(
    editMoviesStore.title,
    editMoviesStore.title_ka,
    genres,
    editMoviesStore.released,
    editMoviesStore.director,
    editMoviesStore.director_ka,
    editMoviesStore.description,
    editMoviesStore.description_ka,
    editMoviesStore.thumbnail,
    editMoviesStore.id
  ).then(() => {
    deactivateModal(authModalStore);
    getMovie(editMoviesStore.id).then((response) => {
      moviesStore.currentMovie = response.data.movie;
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
                Edit Movie
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
            <Form class="flex flex-col gap-4 md:gap-6" @submit="editMovie">
              <InputTextMovie
                name="title"
                rules="required|alpha_spaces|min:6|max:255"
                lang="Eng"
                placeholder="Movie Name"
                v-model="editMoviesStore.title"
              />
              <InputTextMovie
                name="title_ka"
                rules="required|alpha_georgian|min:6|max:255"
                lang="ქარ"
                placeholder="ფილმის სახელი"
                v-model="editMoviesStore.title_ka"
              />
              <InputTextMovie
                name="released"
                rules="required|numeric|min:4|max:4"
                placeholder="წელი/Year"
                v-model="editMoviesStore.released"
              />
              <InputCheckboxGenresEdit
                :genres="genresStore.genres"
                rules="required"
                name="genre"
              />
              <InputTextMovie
                name="director"
                rules="required|alpha_spaces|min:6|max:255"
                lang="Eng"
                placeholder="director"
                v-model="editMoviesStore.director"
              />
              <InputTextMovie
                name="director_ka"
                rules="required|alpha_georgian|min:6|max:255"
                lang="ქარ"
                placeholder="რეჟისორი"
                v-model="editMoviesStore.director_ka"
              />
              <InputTextarea
                name="description"
                rules="required|alpha_spaces|min:6|max:255"
                label="Movie Description"
                lang="Eng"
                v-model="editMoviesStore.description"
              />
              <InputTextarea
                name="description_ka"
                rules="required|alpha_georgian|min:6|max:255"
                label="ფილმის აღწერა"
                lang="ქარ"
                v-model="editMoviesStore.description_ka"
              />
              <InputFile name="thumbnail" type="file" rules="required|image" />
              <ButtonPrimary size="small">Edit Movie</ButtonPrimary>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
