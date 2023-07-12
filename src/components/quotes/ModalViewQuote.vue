<script setup>
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { useUserStore } from "@/stores/userStore.js";
import { useQuoteStore } from "@/stores/quoteStore.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { useEditQuoteStore } from "@/stores/editQuoteStore";
import { activateModal, deactivateModal } from "@/utils/toggleAuthModals.js";
import { computed } from "vue";
import { destroyQuote } from "@/services/api/quotes";
import { getMovie } from "@/services/api/movies.js";
import IconExit from "@/components/icons/IconExit.vue";
import IconPensil from "@/components/icons/IconPensil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";

const authModalStore = useAuthModalStore();
const userStore = useUserStore();
const editQuoteStore = useEditQuoteStore();
const quoteStore = useQuoteStore();
const moviesStore = useMoviesStore();

const { userName, userImg } = userStore;

const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalViewQuote";
});

const onOutsideClick = () => {
  return deactivateModal(authModalStore);
};
const deleteQuote = () => {
  destroyQuote(quoteStore.id).then(() => {
    onOutsideClick();
    getMovie(moviesStore.currentMovie.id).then((response) => {
      moviesStore.currentMovie = response.data.movie;
    });
  });
};
const openEditQuote = () => {
  editQuoteStore.$patch({
    id: quoteStore.id,
    title: quoteStore.title,
    title_ka: quoteStore.title_ka,
    thumbnail: quoteStore.thumbnail,
  });
  activateModal(authModalStore, "modalEditQuote");
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
        class="flex flex-col gap-10 w-full h-full md:h-auto md:max-w-4xl mx-auto bg-darkBlack text-neutralWhite my-0 md:my-20 rounded-lg"
        v-click-outside="onOutsideClick"
      >
        <div class="flex flex-col gap-4 md:gap-7 text-xl">
          <div class="border-b-1 border-neutralGray border-opacity-30">
            <div class="flex items-center justify-between px-9 py-6">
              <div class="flex items-center gap-4 text-darkGray">
                <button @click="openEditQuote" class="flex items-center gap-4">
                  <IconPensil />
                </button>
                <span>|</span>
                <button @click="deleteQuote">
                  <IconTrash />
                </button>
              </div>
              <p class="font-medium text-xl md:text-2xl capitalize">
                view quote
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
            <div class="flex flex-col gap-6">
              <div
                class="relative text-darkGray text-base px-4 py-2 border-1 border-darkGray rounded-md"
              >
                <p>"{{ quoteStore.title }}"</p>
                <span class="absolute right-2 top-2"> Eng </span>
              </div>
              <div
                class="relative text-darkGray text-base px-4 py-2 border-1 border-darkGray rounded-md"
              >
                <p>"{{ quoteStore.title_ka }}"</p>
                <span class="absolute right-2 top-2"> ქარ </span>
              </div>
              <div class="h-80 md:h-[500px] rounded-md overflow-hidden">
                <img
                  :src="quoteStore.thumbnail"
                  alt="quoteImg"
                  class="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
