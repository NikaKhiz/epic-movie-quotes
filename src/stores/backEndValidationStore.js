import { defineStore } from "pinia";

export const useBackErrorsStore = defineStore("backErrorsStore", {
  state: () => {
    return {
      errors: {},
    };
  },
});
