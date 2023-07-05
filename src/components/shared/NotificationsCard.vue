<script setup>
import { computed, inject } from "vue";
import { useAuthModalStore } from "@/stores/authModalStore";
import { deactivateModal } from "@/utils/toggleAuthModals";

import NotificationsCardItem from "@/components/shared/NotificationsCardItem.vue";

const notifications = inject("notifications");
const authModalStore = useAuthModalStore();

const hasNotifications = computed(() => {
  return notifications.value.length > 0;
});
const onOutsideClick = () => {
  deactivateModal(authModalStore);
};
const isModalOpen = computed(() => {
  return authModalStore.activeDialog == "modalNotifications";
});
const markNotificationsRead = () => {
  //mark all notifications as read
};
</script>
<template>
  <transition
    appear
    enter-from-class="-translate-y-full opacity-0"
    enter-active-class="transition-all"
    enter-to-class="translate-y-0 opacity-100"
    leave-from-class="translate-y-0 opacity-100"
    leave-active-class="transition-all"
    leave-to-class="-translate-y-full opacity-0"
  >
    <div
      class="z-50 absolute bg-darkerBlack rounded-md top-20 md:top-24 right-0 md:right-16 w-full max-w-[700px] px-8 pt-5 pb-9 md:py-10"
      v-if="isModalOpen"
      v-click-outside="onOutsideClick"
    >
      <div
        class="absolute -top-4 right-10 md:right-1/3 translate-x-1/3 h-0 w-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[25px] border-b-darkerBlack border-solid"
      ></div>
      <div class="flex flex-col gap-6">
        <div class="flex items-center justify-between">
          <p
            class="text-neutralWhite font-medium capitalize text-xl md:text-3xl"
          >
            notifications
          </p>
          <button
            @click="markNotificationsRead()"
            class="text-neutralWhite underline underline-neutralWhite text-sm md:text-lg"
          >
            Mark as all read
          </button>
        </div>
        <div class="flex flex-col gap-6" v-if="hasNotifications">
          <NotificationsCardItem
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
          />
        </div>
        <p class="text-neutralWhite font-medium text-sm md:text-lg" v-else>
          There is no notificatiosn yet
        </p>
      </div>
    </div>
  </transition>
</template>
