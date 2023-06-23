import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
  const dialog = ref({
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
  });

  const activeDialog = ref("");

  return { dialog, activeDialog };
});
