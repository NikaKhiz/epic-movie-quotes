<script setup>
import MoviesLayout from "@/layouts/MoviesLayout.vue";
import HeaderAuthenticated from "@/components/shared/HeaderAuthenticated.vue";
</script>
<template>
  <MoviesLayout>
    <template #movies-header>
      <HeaderAuthenticated />
    </template>
  </MoviesLayout>
</template>
