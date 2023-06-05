<script setup>
const props = defineProps({
  size: {
    type: String,
  },
});
</script>
<template>
  <button
    class="bg-neutralRed text-neutralWhite rounded-md transition-colors hover:bg-shinyRed"
    :class="{
      'px-4 md:px-6 py-1 md:py-2 text-sm md:text-base': props.size === 'small',
      'px-3 md:px-4 py-2 md:py-2 text-base md:text-xl': props.size === 'large',
    }"
  >
    <slot></slot>
  </button>
</template>
