<script setup>
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="flex flex-col text-center gap-4 md:gap-5">
    <p
      v-if="slots.heading"
      class="text-2xl md:text-3xl font-medium text-neutralWhite"
    >
      <slot name="heading"></slot>
    </p>
    <p v-if="slots['sub-heading']" class="text-base font-normal text-darkGray">
      <slot name="sub-heading"></slot>
    </p>
  </div>
</template>
