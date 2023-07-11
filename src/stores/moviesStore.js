import { defineStore } from "pinia";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => {
    return {
      movies: [],
      currentMovie: {},
    };
  },
});
