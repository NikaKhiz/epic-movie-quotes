<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/userStore.js";

const userStore = useUserStore();
const firstLetter = computed(() => {
  return userStore.userName && userStore.userName[0].toUpperCase();
});
</script>
<template>
  <div
    class="w-full h-full rounded-full flex items-center justify-center text-neutralWhite bg-darkGray"
  >
    {{ firstLetter }}
  </div>
</template>
