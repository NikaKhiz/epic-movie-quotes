<script setup>
import { computed } from "vue";
import { useModalStore } from "@/stores/modalStore.js";
import { toggleModal } from "@/utils/toggleModal";
import NotificationContainer from "@/components/notification/NotificationContainer.vue";
import NotificationHeader from "@/components/notification/NotificationHeader.vue";
import NotificationBody from "@/components/notification/NotificationBody.vue";
import NotificationButtons from "@/components/notification/NotificationButtons.vue";
import LinkPrimary from "@/components/ui/LinkPrimary.vue";
import IconSent from "@/components/icons/IconSent.vue";

const modalStore = useModalStore();
const GmailLink = computed(() => {
  return import.meta.env.VITE_APP_GMAIL;
});
</script>
<template>
  <NotificationContainer class="py-12 px-4 md:px-16">
    <NotificationHeader>
      <template #notification-image><IconSent /></template>
      <template #notification-heading>Thank you!</template>
    </NotificationHeader>
    <NotificationBody>
      <template #notification-body
        >Please check your email and follow the instructions to activate your
        account.</template
      >
    </NotificationBody>
    <NotificationButtons>
      <template #notification-buttons>
        <LinkPrimary
          :link="GmailLink"
          @click="toggleModal(modalStore, '')"
          class="w-full max-w-[190px] md:max-w-[360px]"
        >
          Go to my email
        </LinkPrimary>
      </template>
    </NotificationButtons>
  </NotificationContainer>
</template>
