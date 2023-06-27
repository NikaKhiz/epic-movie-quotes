import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecoveryStore = defineStore("passwordRecoveryStore", () => {
  const email = ref("");

  function $reset() {
    email.value = "";
  }
  return { email, $reset };
});
