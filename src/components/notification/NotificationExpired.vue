<script setup>
import { useModalStore } from "@/stores/modalStore.js";
import { toggleModal } from "@/utils/toggleModal";
import { useEmailVerificationStore } from "@/stores/emailVerificationStore.js";
import NotificationContainer from "@/components/notification/NotificationContainer.vue";
import NotificationHeader from "@/components/notification/NotificationHeader.vue";
import NotificationBody from "@/components/notification/NotificationBody.vue";
import NotificationButtons from "@/components/notification/NotificationButtons.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconExpiration from "@/components/icons/IconExpiration.vue";
import axios from "@/plugins/axios";

const emailVerificationStore = useEmailVerificationStore();
const modalStore = useModalStore();
const requestLink = () => {
  const { getEmailToVerify } = emailVerificationStore;
  axios
    .post(`/api/reverify-email`, {
      email: getEmailToVerify,
    })
    .then(() => {
      toggleModal(modalStore, "emailVerification");
    });
};
</script>
<template>
  <NotificationContainer class="py-12 px-4 md:px-16">
    <NotificationHeader>
      <template #notification-image><IconExpiration /></template>
      <template #notification-heading>Link expired!</template>
    </NotificationHeader>
    <NotificationBody>
      <template #notification-body
        >Link has expired, because you haven’t used it</template
      >
    </NotificationBody>
    <NotificationButtons>
      <template #notification-buttons>
        <ButtonPrimary
          @click="requestLink"
          class="w-full max-w-[290px] md:max-w-[360px]"
        >
          Request another link
        </ButtonPrimary>
      </template>
    </NotificationButtons>
  </NotificationContainer>
</template>
