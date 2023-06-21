<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "large",
  },
  link: {
    type: String,
    required: true,
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
  <a
    :href="props.link"
    target="_blank"
    class="bg-neutralRed border-solid bsorder-1 border-neutralRed text-neutralWhite rounded-md transition-colors hover:bg-shinyRed"
    :class="{
      'px-4 md:px-6 py-1 md:py-2 text-sm md:text-base': smallButton,
      'px-3 md:px-4 py-2 md:py-2 text-base md:text-xl': largeButton,
    }"
    ><slot></slot
  ></a>
</template>
