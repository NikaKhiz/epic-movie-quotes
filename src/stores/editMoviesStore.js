import { defineStore } from "pinia";

export const useEditMoviesStore = defineStore("editMoviesStore", {
  state: () => {
    return {
      id: "",
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
