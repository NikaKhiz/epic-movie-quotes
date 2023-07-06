import { defineStore } from "pinia";

export const useEmailVerificationStore = defineStore("emailVerificationStore", {
  state: () => {
    return {
      emailToVerify: "",
    };
  },
  getters: {
    getEmailToVerify: (state) => state.emailToVerify,
  },
});
