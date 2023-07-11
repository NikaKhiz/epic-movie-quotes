<script setup>
import { useMoviesStore } from "@/stores/moviesStore";
import { computed } from "vue";
import MoviesListItem from "@/components/movies/MoviesListItem.vue";

const moviesStore = useMoviesStore();
const hasMovies = computed(() => {
  return moviesStore.movies.length > 0;
});
</script>

<template>
  <div v-if="hasMovies" class="grid grid-cols-1 md:grid-cols-3 gap-14">
    <MoviesListItem
      v-for="movie in moviesStore.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
  <div
    v-else
    class="flex items-center justify-center text-neutralWhite capitalize text-2xl"
  >
    <p>there is no movies yet</p>
  </div>
</template>
