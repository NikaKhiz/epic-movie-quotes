import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthModalStore = defineStore("authModalStore", () => {
  const activeDialog = ref("");

  return { activeDialog };
});
