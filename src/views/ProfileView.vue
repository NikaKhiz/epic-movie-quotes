<script setup>
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
import NotificationsCard from "@/components/shared/NotificationsCard.vue";
import NavigationUser from "@/components/shared/NavigationUser.vue";
import ProfileInfoDekstop from "@/components/profile/ProfileInfoDekstop.vue";
import ProfileInfoMobile from "@/components/profile/ProfileInfoMobile.vue";
import IconBack from "@/components/icons/IconBack.vue";
import { inject } from "vue";

const mobileDimensions = inject("mobileDimensions");
</script>
<template>
  <ProfileLayout>
    <template #header>
      <HeaderAuthenticated />
    </template>
    <template #aside>
      <NavigationUser class="hidden md:flex" />
    </template>
    <template #profile-info>
      <IconBack v-if="mobileDimensions" class="w-6 h-6" />
      <p v-else class="text-neutralWhite text-2xl capitalize">my profile</p>
      <ProfileInfoMobile v-if="mobileDimensions" />
      <ProfileInfoDekstop v-else />
    </template>
    <template #modals>
      <NotificationsCard />
    </template>
  </ProfileLayout>
</template>
