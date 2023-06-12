import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => {
    return {
      dialog: {
        logIn: false,
        signUp: false,
        emailVerification: false,
        emailResetNotification: false,
        accauntActivated: false,
        passwordRecovery: false,
        passwordRecoveryNotification: false,
        passwordReset: false,
        passwordResetNotification: false,
        linkExpiration: false,
      },
      activeDialog: "",
    };
  },
});
