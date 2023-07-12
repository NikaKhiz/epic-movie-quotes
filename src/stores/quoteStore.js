import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quoteStore", {
  state() {
    return {
      id: null,
      title: "",
      title_ka: "",
      thumbnail: null,
    };
  },
});
