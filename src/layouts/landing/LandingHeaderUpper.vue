<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import ButtonLanguage from "@/components/ui/buttons/ButtonLanguage.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";

const modalStore = useModalStore();
</script>
<template>
  <div
    class="fixed top-0 left-0 z-100 w-full flex items-center justify-between py-7 md:py-9 px-4 md:px-16"
  >
    <h2 class="uppercase text-brownyWhite">Movie quotes</h2>
    <div class="flex items-center gap-4">
      <ButtonLanguage />
      <ButtonPrimary size="small" @click="toggleModal(modalStore, 'signUp')">
        Sign up
      </ButtonPrimary>
      <ButtonSecondary size="small" @click="toggleModal(modalStore, 'logIn')"
        >Log in</ButtonSecondary
      >
    </div>
  </div>
</template>
