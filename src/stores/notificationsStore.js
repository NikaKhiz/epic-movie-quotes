import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notificationsStore", () => {
  const notifications = ref([]);

  function $reset() {
    notifications.value = [];
  }

  return { notifications, $reset };
});
