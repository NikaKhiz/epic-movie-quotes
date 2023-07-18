<script setup>
import IconSuccessCircle from "@/components/icons/IconSuccessCircle.vue";
import { useEditProfileStore } from "@/stores/editProfileStore";
import { computed } from "vue";

const editProfileStore = useEditProfileStore();
const changesMade = computed(() => {
  return editProfileStore.changesMade;
});
</script>
<template>
  <div
    v-if="changesMade"
    class="absolute top-0 left-1/2 -translate-x-1/2 text-base flex items-center gap-2 text-neutralGreen bg-lightGreen p-4 rounded-md"
  >
    <IconSuccessCircle />
    <span>Changes updated succsessfully</span>
  </div>
</template>
