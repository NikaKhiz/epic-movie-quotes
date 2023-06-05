<script setup>
import IconDropdown from "@/components/icons/IconDropdown.vue";
</script>
<template>
  <button
    class="text-neutralWhite hidden md:flex items-center gap-3 px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded-md"
  >
    <span><slot></slot></span><IconDropdown />
  </button>
</template>
