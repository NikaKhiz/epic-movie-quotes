import { defineStore } from "pinia";

export const useNotificationsStore = defineStore("notificationsStore", {
  state: () => {
    return {
      notifications: [],
    };
  },
});
