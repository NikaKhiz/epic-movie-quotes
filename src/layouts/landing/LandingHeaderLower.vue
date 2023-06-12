<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";

const modalStore = useModalStore();
</script>
<template>
  <div class="py-44 md:py-80 flex flex-col gap-8 md:gap-6 items-center">
    <h1
      class="text-brownyWhite font-bold text-2xl md:text-6xl md:leading-[150%] max-w-[280px] md:max-w-[700px] text-center"
    >
      Find any quote in millions of movie lines
    </h1>
    <div class="flex items-center gap-4">
      <ButtonPrimary @click="toggleModal(modalStore, 'signUp')"
        >Get started</ButtonPrimary
      >
    </div>
  </div>
</template>
