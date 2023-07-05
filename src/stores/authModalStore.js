import { defineStore } from "pinia";

export const useAuthModalStore = defineStore("authModalStore", {
  state: () => {
    return {
      activeDialog: "",
    };
  },
});
