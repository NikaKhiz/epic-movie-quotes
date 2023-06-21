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
import ButtonIntent from "@/components/ui/buttons/ButtonIntent.vue";

const modalStore = useModalStore();
const GmailLink = computed(() => {
  return import.meta.env.VITE_APP_GMAIL;
});
</script>
<template>
  <NotificationContainer class="py-12 px-4 md:px-16">
    <NotificationHeader>
      <template #notification-image><IconSent /></template>
      <template #notification-heading>Check your email</template>
    </NotificationHeader>
    <NotificationBody>
      <template #notification-body
        >We have sent a password recover instructions to your email</template
      >
    </NotificationBody>
    <NotificationButtons>
      <template #notification-buttons>
        <LinkPrimary
          :link="GmailLink"
          @click="toggleModal(modalStore, '')"
          class="w-full max-w-[290px] md:max-w-[360px]"
        >
          Go to my email
        </LinkPrimary>
        <ButtonIntent
          @click="toggleModal(modalStore, '')"
          class="text-darkGray no-underline"
          >Skip, I’ll confirm later</ButtonIntent
        >
      </template>
    </NotificationButtons>
  </NotificationContainer>
</template>
