<script setup>
import { useModalStore } from "@/stores/modalStore.js";
import { toggleModal } from "@/utils/toggleModal";
import NotificationContainer from "@/components/notification/NotificationContainer.vue";
import NotificationHeader from "@/components/notification/NotificationHeader.vue";
import NotificationBody from "@/components/notification/NotificationBody.vue";
import NotificationButtons from "@/components/notification/NotificationButtons.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconSent from "@/components/icons/IconSent.vue";

const modalStore = useModalStore();
</script>
<template>
  <NotificationContainer class="py-12 px-4 md:px-16">
    <NotificationHeader>
      <template #notification-image><IconSent /></template>
      <template #notification-heading>Thank you!</template>
    </NotificationHeader>
    <NotificationBody>
      <template #notification-body>Your account has been activated.</template>
    </NotificationBody>
    <NotificationButtons>
      <template #notification-buttons>
        <ButtonPrimary
          @click="toggleModal(modalStore, 'logIn')"
          class="w-full max-w-[190px] md:max-w-[360px]"
        >
          Go to news feed
        </ButtonPrimary>
      </template>
    </NotificationButtons>
  </NotificationContainer>
</template>
