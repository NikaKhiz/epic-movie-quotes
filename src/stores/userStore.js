import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userName = ref("nino tabagari");
  const userEmail = ref("tabagari@example.com");
  const userImg = ref("/src/assets/images/person.svg");
  function $reset() {
    userName.value = "";
    userEmail.value = "";
    userImg.value = null;
  }
  return { userName, userEmail, userImg, $reset };
});
