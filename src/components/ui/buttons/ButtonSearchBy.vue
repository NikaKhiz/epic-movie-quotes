<script setup>
import IconSearchBlue from "@/components/icons/IconSearchBlue.vue";

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "Search",
  },
});
</script>
<template>
  <button
    class="text-lightBlue text-xl border-b-1 border-transparent py-3 px-4 hidden md:flex items-center gap-2"
  >
    <IconSearchBlue class="w-5 h-5" />
    <span>{{ props.label }}</span>
  </button>
</template>
