<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { usePasswordResetStore } from "@/stores/passwordResetStore.js";
import { resetPassword } from "@/services/api/auth.js";
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
const passwordResetStore = usePasswordResetStore();

const updatePassword = () => {
  const { email, token, password, passwordConfirmation } = passwordResetStore;
  axios.get("sanctum/csrf-cookie").then(() => {
    resetPassword(email, token, password, passwordConfirmation)
      .then(() => {
        toggleModal(modalStore, "passwordResetNotification");
        passwordResetStore.$reset();
      })
      .catch((error) => {
        if (error.response.status === 400) {
          backErrorsStore.errors = isBackEndErrors(error.response);
          passwordResetStore.password = "";
          passwordResetStore.passwordConfirmation = "";
        }
        setTimeout(() => {
          backErrorsStore.$reset();
        }, 3000);
      });
  });
};
</script>
<template>
  <FormMain @submit="updatePassword">
    <FormContainer>
      <FormHeading>
        <template #heading>Create new password</template>
        <template #sub-heading>
          Your new password must be different from previous used passwords
        </template>
      </FormHeading>
      <FormFields>
        <InputText
          type="password"
          :required="true"
          name="password"
          label="password"
          rules="required|alpha_numeric|min:8|max:15"
          placeholder="At least 8 & max.15 lower case characters"
          :backEndError="backErrorsStore.errors"
          v-model="passwordResetStore.password"
        />
        <InputText
          type="password"
          :required="true"
          name="confirmation"
          label="Confirm password"
          rules="required|confirmed:@password"
          placeholder="Confirm Password"
          :backEndError="backErrorsStore.errors"
          v-model="passwordResetStore.passwordConfirmation"
        />
        <input
          type="text"
          name="email"
          hidden
          v-model="passwordResetStore.email"
        />
        <input
          type="text"
          name="token"
          hidden
          v-model="passwordResetStore.token"
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
