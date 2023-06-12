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
const signUp = () => {
  //signUp
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
        />
        <InputText
          :required="true"
          name="email"
          label="email"
          rules="required|email"
          placeholder="Enter your email"
        />
        <InputText
          type="password"
          :required="true"
          name="password"
          label="password"
          rules="required|alpha_numeric|min:8|max:15"
          placeholder="Password"
        />
        <InputText
          type="password"
          :required="true"
          name="confirmation"
          label="Confirm password"
          rules="confirmed:@password"
          placeholder="Confirm Password"
        />
        <div class="my-2 flex flex-col gap-4">
          <ButtonPrimary>Get started</ButtonPrimary>
          <ButtonSecondary type="button">
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
