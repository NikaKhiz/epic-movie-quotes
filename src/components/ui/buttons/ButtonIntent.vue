<script setup>
import { useModalStore } from "@/stores/modalStore.js";

const props = defineProps({
  dialogToClose: {
    type: String,
    required: true,
  },
  dialogToOpen: {
    Type: String,
    required: true,
  },
});
const modalStore = useModalStore();
const toggleModals = () => {
  modalStore[props.dialogToClose] = false;
  modalStore[props.dialogToOpen] = true;
};
</script>
<template>
  <span
    @click="toggleModals()"
    class="cursor-pointer text-darkBlue underline underline-darkBlue p-2"
  >
    <slot></slot>
  </span>
</template>
