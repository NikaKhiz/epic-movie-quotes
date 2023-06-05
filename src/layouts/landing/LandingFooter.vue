<script setup>
import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
<template>
  <footer
    class="bg-darkBlack py-3 md:py-4 px-8 md:px-16 text-brownyWhite uppercase font-medium text-xs"
  >
    &copy; {{ currentYear }} movie quotes. All rights reserved.
  </footer>
</template>
