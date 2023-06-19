<script setup>
import { useModalStore } from "@/stores/modalStore.js";
import { computed, provide } from "vue";
import FormSignUp from "@/components/FormSignUp.vue";
import FormLogIn from "@/components/FormLogIn.vue";
import FormPasswordRecovery from "@/components/FormPasswordRecovery.vue";
import FormPasswordReset from "@/components/FormPasswordReset.vue";
const modalStore = useModalStore();
const availableDialogs = {
  signUp: FormSignUp,
  logIn: FormLogIn,
  passwordRecovery: FormPasswordRecovery,
  passwordReset: FormPasswordReset,
};
const selectedComponent = computed(() => {
  return availableDialogs[modalStore.activeDialog];
});

const fullScreenModal = computed(() => {
  return window.innerWidth <= 380;
});

provide("fullScreenModal", fullScreenModal);
</script>
<template>
  <v-dialog
    v-model="modalStore.dialog[modalStore.activeDialog]"
    class="w-full md:max-w-2xl"
    :class="{
      'bg-darkBlack ': fullScreenModal,
    }"
  >
    <transition
      appear
      enter-from-class="opacity-0"
      enter-active-class="transition-[all] duration-[200ms]"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-[all] duration-[200ms]"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <component :is="selectedComponent"></component>
    </transition>
  </v-dialog>
</template>
