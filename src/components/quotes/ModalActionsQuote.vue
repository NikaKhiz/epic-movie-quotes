<script setup>
import { activateModal } from "@/utils/toggleAuthModals.js";
import { useAuthModalStore } from "@/stores/authModalStore";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { useEditQuoteStore } from "@/stores/editQuoteStore.js";
import { useQuoteStore } from "@/stores/quoteStore.js";
import { destroyQuote } from "@/services/api/quotes";
import { getMovie } from "@/services/api/movies.js";
import IconEye from "@/components/icons/IconEye.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPensil from "@/components/icons/IconPensil.vue";

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});

const moviesStore = useMoviesStore();
const authModalStore = useAuthModalStore();
const quoteStore = useQuoteStore();
const editQuoteStore = useEditQuoteStore();

const openQuote = () => {
  quoteStore.$patch(props.quote);
  activateModal(authModalStore, "modalViewQuote");
};
const openEditQuote = () => {
  editQuoteStore.$patch(props.quote);
  activateModal(authModalStore, "modalEditQuote");
};
const deleteQuote = () => {
  destroyQuote(props.quote.id).then(() => {
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
    leave-to-class=" opacity-0"
  >
    <div
      class="bg-neutralBlack rounded-lg px-10 py-8 flex flex-col gap-8 text-neutralWhite text-base absolute bottom-0 -translate-y-8 -right-2 md:top-0 md:right-6 md:translate-x-full md:translate-y-4"
    >
      <button @click="openQuote" class="flex items-center gap-4">
        <IconEye />
        <span class="capitalize">view quote</span>
      </button>
      <button @click="openEditQuote" class="flex items-center gap-4">
        <IconPensil />
        <span class="capitalize">edit</span>
      </button>
      <button @click="deleteQuote" class="flex items-center gap-4">
        <IconTrash />
        <span class="capitalize">delete</span>
      </button>
    </div>
  </transition>
</template>
