<script setup>
import MovieInformation from "@/components/movies/MovieInformation.vue";
import MovieQuotesList from "@/components/movies/MovieQuotesList.vue";
import { useMoviesStore } from "@/stores/moviesStore";

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});

const moviesStore = useMoviesStore();
const currentMovie = moviesStore.movies.find(
  (movie) => movie.id == props.movieId
);
const { quotes } = currentMovie;
</script>
<template>
  <div class="flex flex-col">
    <p
      class="font-medium text-neutralWhite capitalize text-2xl hidden md:block"
    >
      movie description
    </p>
    <MovieInformation :currentMovie="currentMovie" />
    <MovieQuotesList :quotes="quotes" />
  </div>
</template>
