import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegisterStore = defineStore("registerStore", () => {
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const passwordConfirmation = ref("");

  function $reset() {
    name.value = "";
    email.value = "";
    password.value = "";
    passwordConfirmation.value = "";
  }

  return { name, email, password, passwordConfirmation, $reset };
});
