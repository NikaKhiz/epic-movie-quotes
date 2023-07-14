import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quoteStore", {
  state() {
    return {
      quoteIndex: null,
      id: null,
      title: "",
      title_ka: "",
      thumbnail: null,
      comments: [],
      users: [],
      userLike: false,
    };
  },
});
