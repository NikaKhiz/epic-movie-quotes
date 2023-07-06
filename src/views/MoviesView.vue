<script setup>
import MoviesLayout from "@/layouts/MoviesLayout.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
import NotificationsCard from "@/components/shared/NotificationsCard.vue";
import NavigationUser from "@/components/shared/NavigationUser.vue";
import MoviesList from "@/components/movies/MoviesList.vue";
</script>
<template>
  <MoviesLayout>
    <template #header>
      <HeaderAuthenticated />
    </template>
    <template #aside>
      <NavigationUser class="hidden md:flex" />
    </template>
    <template #list>
      <MoviesList />
    </template>
    <template #modals>
      <NotificationsCard />
    </template>
  </MoviesLayout>
</template>
