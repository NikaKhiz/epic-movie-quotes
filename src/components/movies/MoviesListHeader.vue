<script setup>
import { computed, ref } from "vue";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { activateModal } from "@/utils/toggleAuthModals.js";
import { useAuthModalStore } from "@/stores/authModalStore.js";
import ButtonSearchBy from "@/components/ui/buttons/ButtonSearchBy.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconAdd from "@/components/icons/IconAdd.vue";
import IconSearchBlue from "@/components/icons/IconSearchBlue.vue";

const authModalStore = useAuthModalStore();
const moviesStore = useMoviesStore();
const totalMovies = computed(() => {
  return moviesStore.movies.length;
});
const search = ref(false);
const searchBarOpen = () => {
  search.value = !search.value;
};
const onOutsideClick = () => {
  search.value = false;
};
</script>

<template>
  <div class="flex items-start md:items-center justify-between">
    <div class="text-2xl text-neutralWhite">
      <p class="flex flex-col gap-2 min-w-max md:items-center md:flex-row">
        My list of movies
        <span class="text-base md:text-xl">(total {{ totalMovies }})</span>
      </p>
    </div>
    <div class="flex-1 flex items-center justify-end">
      <ButtonSearchBy v-if="!search" @click="searchBarOpen" />
      <div
        class="flex flex-1 max-w-lg gap-4 items-center text-lg py-3 border-b-1 border-darkGray"
        v-if="search"
      >
        <IconSearchBlue class="w-5 h-5" />
        <input
          v-click-outside="onOutsideClick"
          type="text"
          class="w-full text-neutralWhite outline-none bg-transparent"
          placeholder="Enter @ to search movies, Enter # to search quotes"
        />
      </div>
      <ButtonPrimary
        @click="activateModal(authModalStore, 'modalAddMovie')"
        class="min-w-max"
      >
        <div class="flex items-center gap-2">
          <IconAdd />
          <span>Add movie</span>
        </div>
      </ButtonPrimary>
    </div>
  </div>
</template>
