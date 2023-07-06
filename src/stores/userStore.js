import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userName = ref("");
  const userEmail = ref("");
  const userImg = ref("");

  function $reset() {
    userName.value = "";
    userEmail.value = "";
    userImg.value = null;
  }

  return { userName, userEmail, userImg, $reset };
});
