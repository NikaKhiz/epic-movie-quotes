import { defineStore } from "pinia";

export const useLoginStore = defineStore("loginStore", {
  state() {
    return {
      email: "",
      password: "",
    };
  },
});
