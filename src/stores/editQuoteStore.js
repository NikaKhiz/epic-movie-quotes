import { defineStore } from "pinia";

export const useEditQuoteStore = defineStore("editQuoteStore", {
  state: () => {
    return {
      id: null,
      title: "",
      title_ka: "",
      thumbnail: null,
    };
  },
});
