import { defineStore } from "pinia";

export const useMoviesStore = defineStore("moviesStore", {
  state: () => {
    return {
      addMovie: {
        title: "",
        titleKa: "",
        director: "",
        directorKa: "",
        released: "",
        description: "",
        descriptionKa: "",
        genres: [],
      },
    };
  },
});
