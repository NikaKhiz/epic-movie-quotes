<script setup>
defineProps({
  errors: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <ul>
    <li
      class="text-dullRed font-normal text-sm"
      v-for="error in errors"
      :key="error"
    >
      {{ error }}
    </li>
  </ul>
</template>
