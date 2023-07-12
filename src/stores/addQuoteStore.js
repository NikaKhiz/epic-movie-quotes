import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("addQuoteStore", {
  state: () => {
    return {
      title: "",
      title_ka: "",
      thumbnail: null,
    };
  },
});
