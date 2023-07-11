<script setup>
import { useMoviesStore } from "@/stores/moviesStore.js";
import { onMounted } from "vue";
import { getMovie } from "@/services/api/movies.js";
import MovieInformation from "@/components/movies/MovieInformation.vue";
import MovieQuotesList from "@/components/movies/MovieQuotesList.vue";

const props = defineProps({
  movieId: {
    type: String,
  },
});
const moviesStore = useMoviesStore();
onMounted(() => {
  getMovie(props.movieId).then((response) => {
    moviesStore.currentMovie = response.data.movie;
  });
});
</script>
<template>
  <div class="flex flex-col">
    <p
      class="font-medium text-neutralWhite capitalize text-2xl hidden md:block"
    >
      movie description
    </p>
    <MovieInformation :currentMovie="moviesStore.currentMovie" />
    <MovieQuotesList :quotes="moviesStore.currentMovie.quotes" />
  </div>
</template>
