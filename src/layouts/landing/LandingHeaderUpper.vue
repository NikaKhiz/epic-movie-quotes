<script setup>
import ButtonLanguage from "@/components/ui/buttons/ButtonLanguage.vue";
import ModalMain from "@/components/ModalMain.vue";
</script>
<template>
  <div
    class="fixed top-0 left-0 z-100 w-full flex items-center justify-between py-7 md:py-9 px-4 md:px-16"
  >
    <h2 class="uppercase text-brownyWhite">Movie quotes</h2>
    <div class="flex items-center gap-4">
      <ButtonLanguage>Eng</ButtonLanguage>
      <ModalMain currentDialog="dialogSignUp" buttonSize="small" />
      <ModalMain
        currentDialog="dialogLogIn"
        buttonLabel="Log in"
        buttonSize="small"
      />
    </div>
  </div>
</template>
