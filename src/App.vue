<script setup>
import ModalMain from "@/components/ModalMain.vue";
import { computed, onMounted, provide } from "vue";
import { getUserInfo } from "@/services/api/auth.js";
import { useUserStore } from "@/stores/userStore.js";
const userStore = useUserStore();

onMounted(() => {
  getUserInfo()
    .then((response) => {
      userStore.userName = response.data.user.name;
      userStore.userEmail = response.data.user.email;
      userStore.isGoogleAccaunt = response.data.user.google_accaunt;
      localStorage.setItem("isAuthed", true);
    })
    .catch(() => {
      userStore.$reset();
      localStorage.setItem("isAuthed", false);
    });
});
const mobileDimensions = computed(() => {
  return window.innerWidth <= 768;
});
provide("mobileDimensions", mobileDimensions);
</script>

<template>
  <router-view></router-view>
  <ModalMain />
</template>
