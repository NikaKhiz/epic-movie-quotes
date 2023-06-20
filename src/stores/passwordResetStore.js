import { defineStore } from "pinia";
export const usePasswordResetStore = defineStore("passwordResetStore", {
  state: () => {
    return {
      token: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  },
});
