<script setup>
import MoviesLayout from "@/layouts/MoviesLayout.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
import NotificationsCard from "@/components/shared/NotificationsCard.vue";
import NavigationUser from "@/components/shared/NavigationUser.vue";
import MoviesListHeader from "@/components/movies/MoviesListHeader.vue";
import MoviesList from "@/components/movies/MoviesList.vue";
import ModalAddMovie from "@/components/movies/ModalAddMovie.vue";
import { onMounted } from "vue";
import { getMovies } from "@/services/api/movies.js";
import { useMoviesStore } from "@/stores/moviesStore.js";

const moviesStore = useMoviesStore();
onMounted(() => {
  getMovies().then((response) => {
    moviesStore.movies = response.data.movies;
  });
});
</script>
<template>
  <MoviesLayout>
    <template #header>
      <HeaderAuthenticated />
    </template>
    <template #aside>
      <NavigationUser class="hidden md:flex" />
    </template>
    <template #navigation>
      <MoviesListHeader />
    </template>
    <template #list>
      <MoviesList />
    </template>
    <template #modals>
      <NotificationsCard />
      <ModalAddMovie />
    </template>
  </MoviesLayout>
</template>
