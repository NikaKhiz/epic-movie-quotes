<script setup>
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { useAddQuoteStore } from "@/stores/addQuoteStore.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { useUserStore } from "@/stores/userStore.js";
import { deactivateModal } from "@/utils/toggleAuthModals.js";
import { computed } from "vue";
import { Form } from "vee-validate";
import { addQuote } from "@/services/api/quotes.js";
import { getMovie } from "@/services/api/movies.js";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import InputFile from "@/components/ui/InputFile.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";
import IconExit from "@/components/icons/IconExit.vue";

const authModalStore = useAuthModalStore();
const userStore = useUserStore();
const moviesStore = useMoviesStore();
const addQuoteStore = useAddQuoteStore();
const { userName, userImg } = userStore;

const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalAddQuote";
});
const onOutsideClick = () => {
  return deactivateModal(authModalStore);
};

const createQuote = (values) => {
  addQuoteStore.thumbnail = values.thumbnail;
  const movieId = moviesStore.currentMovie.id;
  const { title, title_ka, thumbnail } = addQuoteStore;
  addQuote(title, title_ka, thumbnail, movieId).then(() => {
    onOutsideClick();
    getMovie(movieId).then((response) => {
      moviesStore.currentMovie = response.data.movie;
    });
    addQuoteStore.$reset();
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
      class="fixed top-0 left-0 bottom-0 right-0 bg-darkBlack bg-opacity-50"
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
                add quote
              </p>
              <div
                class="cursor-pointer w-6 h-6 flex items-center justify-center"
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
            <div class="bg-darkerBlack md:bg-transparent px-2 py-4 rounded-lg">
              <div class="flex itms-center gap-3">
                <div
                  class="w-28 md:w-72 h-28 md:h-40 rounded-md overflow-hidden"
                >
                  <img
                    :src="moviesStore.currentMovie.thumbnail"
                    alt="movieImg"
                    class="block w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col gap-2 justify-center">
                  <p class="text-brownyWhite text-basemd:text-2xl order-1">
                    {{ moviesStore.currentMovie.title }}
                    <span>({{ moviesStore.currentMovie.released }})</span>
                  </p>
                  <p class="text-lightBlue text-base order-2 md:order-3">
                    Director:
                    <span class="text-neutralWhite">{{
                      moviesStore.currentMovie.director
                    }}</span>
                  </p>
                  <div class="flex items-center gap-2 order-3 md:order-2">
                    <p
                      class="px-3 py-1 rounded-md bg-darkGray text-neutralWhite text-xs md:text-base"
                      v-for="genre in moviesStore.currentMovie.genres"
                      :key="genre.id"
                    >
                      {{ genre.genre }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form class="flex flex-col gap-6" @submit="createQuote">
              <InputTextarea
                name="title"
                label="create a new quote"
                lang="Eng"
                rules="required|alpha_spaces|min:6|max:255"
                v-model="addQuoteStore.title"
              />
              <InputTextarea
                name="title_ka"
                label="ახალი ციტატა"
                lang="ქარ"
                rules="required|alpha_georgian|min:6|max:255"
                v-model="addQuoteStore.title_ka"
              />
              <InputFile name="thumbnail" type="file" rules="required|image" />
              <ButtonPrimary size="small">Add Quote</ButtonPrimary>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
