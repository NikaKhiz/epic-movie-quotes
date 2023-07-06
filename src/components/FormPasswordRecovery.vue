<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { recoverPassword } from "@/services/api/auth.js";
import { useRecoveryStore } from "@/stores/passwordRecoveryStore.js";
import { isBackEndErrors } from "@/utils/isBackEndErrors.js";
import FormMain from "@/components/FormMain.vue";
import ButtonBack from "@/components/ui/buttons/ButtonBack.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import FormContainer from "@/components/FormContainer.vue";
import FormFields from "@/components/FormFields.vue";
import FormHeading from "@/components/FormHeading.vue";
import FormFooter from "@/components/FormFooter.vue";
import InputText from "@/components/ui/InputText.vue";
import axios from "@/plugins/axios";

const modalStore = useModalStore();
const backErrorsStore = useBackErrorsStore();
const recoveryStore = useRecoveryStore();

const sendPasswordRecoveryLink = () => {
  const { email } = recoveryStore;
  axios.get("sanctum/csrf-cookie").then(() => {
    recoverPassword(email)
      .then(() => {
        toggleModal(modalStore, "passwordRecoveryNotification");
        recoveryStore.$reset();
      })
      .catch((error) => {
        console.log(error);
        backErrorsStore.errors = isBackEndErrors(error.response);
        setTimeout(() => {
          backErrorsStore.$reset();
        }, 3000);
      });
  });
};
</script>
<template>
  <FormMain @submit="sendPasswordRecoveryLink">
    <FormContainer>
      <FormHeading>
        <template #heading>Forgot password?</template>
        <template #sub-heading>
          Enter the email and we’ll send an email with instructions to reset
          your password
        </template>
      </FormHeading>
      <FormFields>
        <InputText
          :required="true"
          name="email"
          label="Email"
          rules="required|email"
          placeholder="Enter your email"
          :backEndError="backErrorsStore.errors"
          v-model="recoveryStore.email"
        />
      </FormFields>
      <ButtonPrimary> Send instructions </ButtonPrimary>
      <FormFooter>
        <ButtonBack @click="toggleModal(modalStore, 'logIn')">
          Back to log in
        </ButtonBack>
      </FormFooter>
    </FormContainer>
  </FormMain>
</template>
