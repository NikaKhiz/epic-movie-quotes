<script setup>
import { useModalStore } from "@/stores/modalStore.js";
import { useRegisterStore } from "@/stores/registerStore.js";
import { toggleModal } from "@/utils/toggleModal.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { register } from "@/services/api/auth.js";
import { isBackEndErrors } from "@/utils/isBackEndErrors.js";
import { authViaGoogle } from "@/utils/googleAuthentication.js";
import FormMain from "@/components/FormMain.vue";
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import ButtonIntent from "@/components/ui/buttons/ButtonIntent.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import FormContainer from "@/components/FormContainer.vue";
import FormFields from "@/components/FormFields.vue";
import FormHeading from "@/components/FormHeading.vue";
import FormFooter from "@/components/FormFooter.vue";
import InputText from "@/components/ui/InputText.vue";
import axios from "@/plugins/axios";

const backErrorsStore = useBackErrorsStore();
const modalStore = useModalStore();

const registerStore = useRegisterStore();

const signUp = () => {
  axios.get("sanctum/csrf-cookie").then(() => {
    register(
      registerStore.name,
      registerStore.email,
      registerStore.password,
      registerStore.passwordConfirmation
    )
      .then((response) => {
        if (response.status === 204) {
          toggleModal(modalStore, "emailVerification");
          registerStore.$reset();
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          backErrorsStore.errors = isBackEndErrors(error.response);
          registerStore.password = "";
          registerStore.passwordConfirmation = "";
          setTimeout(() => {
            backErrorsStore.$reset();
          }, 3000);
        }
      });
  });
};
</script>
<template>
  <FormMain @submit="signUp">
    <FormContainer>
      <FormHeading>
        <template #heading> Create an account</template>
        <template #sub-heading> Start your journey! </template>
      </FormHeading>
      <FormFields>
        <InputText
          :required="true"
          name="name"
          label="name"
          rules="required|alpha|min:3|max:15"
          placeholder="Enter your name"
          :backEndError="backErrorsStore.errors"
          v-model="registerStore.name"
        />
        <InputText
          :required="true"
          name="email"
          label="email"
          rules="required|email"
          placeholder="Enter your email"
          :backEndError="backErrorsStore.errors"
          v-model="registerStore.email"
        />
        <InputText
          type="password"
          :required="true"
          name="password"
          label="password"
          rules="required|alpha_numeric|min:8|max:15"
          placeholder="Password"
          :backEndError="backErrorsStore.errors"
          v-model="registerStore.password"
        />
        <InputText
          type="password"
          :required="true"
          name="confirmation"
          label="Confirm password"
          rules="required|confirmed:@password"
          placeholder="Confirm Password"
          :backEndError="backErrorsStore.errors"
          v-model="registerStore.passwordConfirmation"
        />
        <div class="my-2 flex flex-col gap-4">
          <ButtonPrimary>Get started</ButtonPrimary>
          <ButtonSecondary type="button" @click="authViaGoogle">
            <IconGmail />
            <span>Sign up with Google</span>
          </ButtonSecondary>
        </div>
      </FormFields>
      <FormFooter>
        <p>
          Already have an account?
          <ButtonIntent @click="toggleModal(modalStore, 'logIn')"
            >Log in</ButtonIntent
          >
        </p>
      </FormFooter>
    </FormContainer>
  </FormMain>
</template>
