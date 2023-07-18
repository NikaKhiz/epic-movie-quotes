import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      id: null,
      userName: "",
      userEmail: "",
      profile_picture: "",
      isGoogleAccaunt: false,
    };
  },
});
