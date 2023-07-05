<script setup>
import MoviesLayout from "@/layouts/MoviesLayout.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
import NotificationsCard from "@/components/shared/NotificationsCard.vue";
</script>
<template>
  <MoviesLayout>
    <template #movies-header>
      <HeaderAuthenticated />
    </template>
    <template #movies-modals>
      <NotificationsCard />
    </template>
  </MoviesLayout>
</template>
