<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
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
const modalStore = useModalStore();

const signIn = () => {
  // signIn
};
</script>
<template>
  <FormMain @click="signIn">
    <FormContainer>
      <FormHeading>
        <template #heading>Log in to your account</template>
        <template #sub-heading>
          Welcome back! Please enter your details.
        </template>
      </FormHeading>
      <FormFields>
        <InputText
          :required="true"
          name="email"
          label="Email"
          rules="required|min:3|max:15"
          placeholder="Enter your email"
        />
        <InputText
          :required="true"
          name="password"
          label="password"
          rules="required"
          placeholder="Password"
        />
        <div class="text-neutralWhite flex items-center justify-between">
          <div class="accent-darkGray flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="w-4 h-4"
            />
            <label for="remember">Remember me</label>
          </div>
          <ButtonIntent @click="toggleModal(modalStore, 'passwordRecovery')"
            >Forgot password</ButtonIntent
          >
        </div>
        <div class="my-2 flex flex-col gap-4">
          <ButtonPrimary>Sign in</ButtonPrimary>
          <ButtonSecondary type="button">
            <IconGmail />
            <span>Sign in with Google</span>
          </ButtonSecondary>
        </div>
      </FormFields>
      <FormFooter>
        <p>
          dont have an accaunt yet?
          <ButtonIntent @click="toggleModal(modalStore, 'signUp')"
            >Sign up</ButtonIntent
          >
        </p>
      </FormFooter>
    </FormContainer>
  </FormMain>
</template>
