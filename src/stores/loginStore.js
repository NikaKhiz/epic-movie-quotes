import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("loginStore", () => {
  const email = ref("");
  const password = ref("");

  function $reset() {
    email.value = "";
    password.value = "";
  }

  return { email, password, $reset };
});
