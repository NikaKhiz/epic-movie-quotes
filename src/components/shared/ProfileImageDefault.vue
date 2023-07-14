<script setup>
import { computed } from "vue";

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
});
const firstLetter = computed(() => {
  return props.userName[0].toUpperCase();
});
</script>
<template>
  <div
    class="w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-neutralWhite bg-darkGray"
  >
    {{ firstLetter }}
  </div>
</template>
