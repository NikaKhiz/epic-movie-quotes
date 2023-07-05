<script setup>
import IconBell from "@/components/icons/IconBell.vue";
import { activateModal } from "@/utils/toggleAuthModals";
import { useAuthModalStore } from "@/stores/authModalStore";
import { ref, inject, computed } from "vue";

const notifications = inject("notifications");
const authModalStore = useAuthModalStore();

const recentNotifications = ref([]);
const hasNewNotifications = computed(() => {
  notifications.value.filter((elem) => {
    if (!elem.seen) {
      recentNotifications.value.push(elem);
    }
  });
  return recentNotifications.value.length > 0;
});
</script>
<template>
  <button
    @click="activateModal(authModalStore, 'modalNotifications')"
    class="w-6 h-6 md:w-8 md:h-8 relative flex items-center"
  >
    <IconBell class="w-full block object-cover" />
    <div
      v-if="hasNewNotifications"
      class="bg-neutralRed w-3 h-3 md:w-5 md:h-5 rounded-full absolute top-0 md:-top-1 right-0 md:-right-1 flex items-center justify-center font-bold text-neutralWhite text-[8px] md:text-sm"
    >
      {{ recentNotifications.length }}
    </div>
  </button>
</template>
