<script setup>
import MovieInspectLayout from "@/layouts/MovieInspectLayout.vue";
import MovieContent from "@/components/movies/MovieContent.vue";
import ModalEditMovie from "@/components/movies/ModalEditMovie.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
import NavigationUser from "@/components/shared/NavigationUser.vue";
import NotificationsCard from "@/components/shared/NotificationsCard.vue";
import ModalEditQuote from "@/components/quotes/ModalEditQuote.vue";
import ModalAddQuote from "@/components/quotes/ModalAddQuote.vue";
import ModalViewQuote from "@/components/quotes/ModalViewQuote.vue";

const props = defineProps({
  movieId: {
    type: String,
  },
});
</script>
<template>
  <MovieInspectLayout>
    <template #header>
      <HeaderAuthenticated />
    </template>
    <template #aside>
      <NavigationUser class="hidden md:flex" />
    </template>
    <template #content>
      <MovieContent :movieId="props.movieId" />
    </template>
    <template #modals>
      <NotificationsCard />
      <ModalEditMovie />
      <ModalViewQuote />
      <ModalAddQuote />
      <ModalEditQuote />
    </template>
  </MovieInspectLayout>
</template>
