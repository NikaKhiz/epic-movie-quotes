import { defineStore } from "pinia";

export const useAddCommentStore = defineStore("addCommentStore", {
  state: () => {
    return {
      comment: "",
    };
  },
});
