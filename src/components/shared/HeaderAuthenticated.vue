<script setup>
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";
import ButtonLanguage from "@/components/ui/buttons/ButtonLanguage.vue";
import ButtonNotifications from "@/components/ui/buttons/ButtonNotifications.vue";
import ButtonHamburger from "@/components/ui/buttons/ButtonHamburger.vue";
import ButtonSearch from "@/components/ui/buttons/ButtonSearch.vue";
import { logoutUser } from "@/services/api/auth.js";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";

const router = useRouter();
const userStore = useUserStore();
const logOut = () => {
  logoutUser().then(() => {
    localStorage.setItem("isAuthed", JSON.stringify(false));
    router.push({ name: "landing" });
    userStore.$reset();
  });
};
</script>

<template>
  <div
    class="flex items-center justify-between py-8 px-9 md:px-16 bg-mediumBlack"
  >
    <div>
      <h2 class="uppercase text-brownyWhite hidden md:block">Movie quotes</h2>
      <ButtonHamburger />
    </div>
    <div class="flex items-center gap-4">
      <ButtonSearch />
      <ButtonNotifications />
      <ButtonLanguage class="hidden md:block" />
      <ButtonSecondary size="small" class="hidden md:flex" @click="logOut"
        >Log out</ButtonSecondary
      >
    </div>
  </div>
</template>
