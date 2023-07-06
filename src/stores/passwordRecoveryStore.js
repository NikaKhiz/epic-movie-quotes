import { defineStore } from "pinia";

export const useRecoveryStore = defineStore("passwordRecoveryStore", {
  state: () => {
    return {
      email: "",
    };
  },
});
