import { defineStore } from "pinia";

export const useGenresStore = defineStore("genresStore", {
  state: () => {
    return {
      genres: [],
    };
  },
});
