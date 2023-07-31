<script setup>
import { computed } from "vue";

const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
});

const firstLetter = computed(() => {
  return props.userName && props.userName[0].toUpperCase();
});
</script>
<template>
  <div
    class="w-full h-full rounded-full flex items-center justify-center text-neutralWhite bg-darkGray"
  >
    {{ firstLetter }}
  </div>
</template>
