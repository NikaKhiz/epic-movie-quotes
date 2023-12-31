import { defineStore } from "pinia";

export const useAddMoviesStore = defineStore("addMoviesStore", {
  state: () => {
    return {
      title: "",
      title_ka: "",
      director: "",
      director_ka: "",
      released: "",
      description: "",
      description_ka: "",
      genres: [],
      thumbnail: null,
    };
  },
});
