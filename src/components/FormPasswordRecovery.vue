<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import FormMain from "@/components/FormMain.vue";
import ButtonBack from "@/components/ui/buttons/ButtonBack.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import FormContainer from "@/components/FormContainer.vue";
import FormFields from "@/components/FormFields.vue";
import FormHeading from "@/components/FormHeading.vue";
import FormFooter from "@/components/FormFooter.vue";
import InputText from "@/components/ui/InputText.vue";
const modalStore = useModalStore();
const recoverPassword = () => {
  // recoverPassword
};
</script>
<template>
  <FormMain @submit="recoverPassword">
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
