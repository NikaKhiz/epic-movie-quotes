<script setup>
import ModalMain from "@/components/ModalMain.vue";
import { onMounted, provide, ref } from "vue";
import { getUserInfo } from "@/services/api/auth.js";
import { useUserStore } from "@/stores/userStore.js";

const userStore = useUserStore();
const mobileDimensions = ref(false);

onMounted(() => {
  getUserInfo()
    .then((response) => {
      userStore.userName = response.data.user.name;
      userStore.userEmail = response.data.user.email;
      userStore.isGoogleAccaunt = response.data.user.google_accaunt;
      userStore.profile_picture = response.data.user.profile_picture;
      localStorage.setItem("isAuthed", true);
    })
    .catch(() => {
      userStore.$reset();
      localStorage.setItem("isAuthed", false);
    });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      mobileDimensions.value = true;
    } else {
      mobileDimensions.value = false;
    }
    return () => {
      window.removeEventListener("resize");
    };
  });
});
provide("mobileDimensions", mobileDimensions);
</script>

<template>
  <router-view></router-view>
  <ModalMain />
</template>
