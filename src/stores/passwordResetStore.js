import { defineStore } from "pinia";
import { ref } from "vue";
export const usePasswordResetStore = defineStore("passwordResetStore", () => {
  const token = ref("");
  const email = ref("");
  const password = ref("");
  const passwordConfirmation = ref("");

  function $reset() {
    token.value = "";
    email.value = "";
    password.value = "";
    passwordConfirmation.value = "";
  }
  return { token, email, password, passwordConfirmation, $reset };
});
