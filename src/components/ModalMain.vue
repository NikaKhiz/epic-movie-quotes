<script setup>
import { useModalStore } from "@/stores/modalStore.js";
import { computed, inject } from "vue";
import FormSignUp from "@/components/FormSignUp.vue";
import FormLogIn from "@/components/FormLogIn.vue";
import FormPasswordRecovery from "@/components/FormPasswordRecovery.vue";
import FormPasswordReset from "@/components/FormPasswordReset.vue";
import NotificationVerification from "@/components/notification/NotificationVerification.vue";
import NotificationAccauntActivated from "@/components/notification/NotificationAccauntActivated.vue";
import NotificationPasswordRecovery from "@/components/notification/NotificationPasswordRecovery.vue";
import NotificationPasswordReset from "@/components/notification/NotificationPasswordReset.vue";
import NotificationExpired from "@/components/notification/NotificationExpired.vue";

const modalStore = useModalStore();
const availableDialogs = {
  signUp: FormSignUp,
  emailVerification: NotificationVerification,
  accauntActivated: NotificationAccauntActivated,
  logIn: FormLogIn,
  passwordRecovery: FormPasswordRecovery,
  linkExpiration: NotificationExpired,
  passwordRecoveryNotification: NotificationPasswordRecovery,
  passwordReset: FormPasswordReset,
  passwordResetNotification: NotificationPasswordReset,
};
const selectedComponent = computed(() => {
  return availableDialogs[modalStore.activeDialog];
});
const mobileDimensions = inject("mobileDimensions");
</script>
<template>
  <v-dialog
    v-model="modalStore.dialog[modalStore.activeDialog]"
    class="w-full md:max-w-2xl"
    :class="{
      'bg-darkBlack ': mobileDimensions,
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
