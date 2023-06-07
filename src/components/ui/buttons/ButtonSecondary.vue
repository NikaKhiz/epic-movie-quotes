<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: "large",
  },
  type: {
    type: String,
    required: false,
  },
});

const smallButton = computed(() => {
  return props.size === "small";
});
const largeButton = computed(() => {
  return props.size === "large";
});
</script>
<template>
  <button
    class="flex items-center justify-center text-neutralWhite border-solid border-1 border-neutralWhite gap-2 px-4 md:px-6 text-sm md:text-base rounded-md"
    :class="{
      'py-1 md:py-2 ': smallButton,
      'py-2 md:py-2 ': largeButton,
    }"
    :type="type"
  >
    <slot></slot>
  </button>
</template>
