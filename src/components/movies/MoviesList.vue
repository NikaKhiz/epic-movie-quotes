<script setup>
import MoviesListItem from "@/components/movies/MoviesListItem.vue";
import { useMoviesStore } from "@/stores/moviesStore";

const moviesStore = useMoviesStore();
const movies = moviesStore.movies;
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-14">
    <MoviesListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>
