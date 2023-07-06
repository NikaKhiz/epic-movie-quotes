import { defineStore } from "pinia";

export const useRegisterStore = defineStore("registerStore", {
  state() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
});
