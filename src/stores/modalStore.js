import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => {
    return {
      dialogLogIn: false,
      dialogSignUp: false,
      dialogGetStarted: false,
      dialogEmailVerification: false,
      dialogEmailResetNotification: false,
      dialogAccauntActivated: false,
      dialogPasswordRecovery: false,
      dialogPasswordRecoveryNotification: false,
      dialogPasswordReset: false,
      dialogPasswordResetNotification: false,
      dialogLinkExpiration: false,
    };
  },
});
