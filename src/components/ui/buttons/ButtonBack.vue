<script setup>
import IconBack from "@/components/icons/IconBack.vue";
</script>
<template>
  <div class="cursor-pointer flex items-center gap-2">
    <IconBack />
    <span class="text-darkGray">
      <slot></slot>
    </span>
  </div>
</template>
