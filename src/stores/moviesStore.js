import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoviesStore = defineStore("moviesStore", () => {
  const addMovie = ref({
    title: "",
    titleKa: "",
    director: "",
    directorKa: "",
    released: "",
    description: "",
    descriptionKa: "",
    genres: [],
  });

  const movies = ref([]);

  function $reset() {
    movies.value = [];
  }

  return { movies, $reset, addMovie };
});
