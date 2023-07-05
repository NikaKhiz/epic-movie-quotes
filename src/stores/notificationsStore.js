import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notificationsStore", () => {
  const notifications = ref([
    {
      id: 1,
      type: "commented",
      seen: false,
      createdAt: "2023-06-26 21:33:35",

      by: "person name",
      personImg: "/src/assets/images/person.svg",
    },
    {
      id: 2,
      type: "reacted",
      seen: true,
      createdAt: "2023-06-23 12:53:35",
      by: "person name 2",
      personImg: "/src/assets/images/person.svg",
    },
  ]);

  function $reset() {
    notifications.value = [];
  }

  return { notifications, $reset };
});
