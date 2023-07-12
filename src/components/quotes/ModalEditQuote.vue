<script setup>
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { useEditQuoteStore } from "@/stores/editQuoteStore.js";
import { useUserStore } from "@/stores/userStore.js";
import { deactivateModal } from "@/utils/toggleAuthModals.js";
import { destroyQuote } from "@/services/api/quotes.js";
import { updateQuote } from "@/services/api/quotes.js";
import { getMovie } from "@/services/api/movies.js";
import { computed } from "vue";
import { Form } from "vee-validate";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconExit from "@/components/icons/IconExit.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import InputFile from "@/components/ui/InputFile.vue";
import InputTextarea from "@/components/ui/InputTextarea.vue";

const authModalStore = useAuthModalStore();
const userStore = useUserStore();
const editQuoteStore = useEditQuoteStore();
const moviesStore = useMoviesStore();

const { userName, userImg } = userStore;

const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalEditQuote";
});
const onOutsideClick = () => {
  return deactivateModal(authModalStore);
};
const editQuote = (values) => {
  editQuoteStore.thumbnail = values.thumbnail;
  updateQuote(
    editQuoteStore.title,
    editQuoteStore.title_ka,
    editQuoteStore.thumbnail,
    editQuoteStore.id
  ).then(() => {
    onOutsideClick();
    getMovie(moviesStore.currentMovie.id).then((response) => {
      moviesStore.currentMovie = response.data.movie;
    });
  });
};
const deleteQuote = () => {
  destroyQuote(editQuoteStore.id).then(() => {
    onOutsideClick();
    getMovie(moviesStore.currentMovie.id).then((response) => {
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
              <div class="flex items-center gap-2 text-darkGray">
                <button @click="deleteQuote">
                  <IconTrash />
                </button>
              </div>
              <p class="font-medium text-xl md:text-2xl capitalize">
                edit quote
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
            <Form class="flex flex-col gap-6" @submit="editQuote">
              <InputTextarea
                name="title"
                label="create a new quote"
                lang="Eng"
                rules="required|alpha_spaces|min:6|max:255"
                v-model="editQuoteStore.title"
              />
              <InputTextarea
                name="title_ka"
                label="ახალი ციტატა"
                lang="ქარ"
                rules="required|alpha_georgian|min:6|max:255"
                v-model="editQuoteStore.title_ka"
              />
              <InputFile name="thumbnail" type="file" rules="required|image" />
              <ButtonPrimary size="small">Edit Quote</ButtonPrimary>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
