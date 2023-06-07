<script setup>
import { Form } from "vee-validate";
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import ButtonIntent from "@/components/ui/buttons/ButtonIntent.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import FormContainer from "@/components/FormContainer.vue";
import FormFields from "@/components/FormFields.vue";
import FormHeading from "@/components/FormHeading.vue";
import FormFooter from "@/components/FormFooter.vue";
import InputText from "@/components/ui/InputText.vue";
defineProps({
  currentDialog: {
    type: String,
    required: false,
    default: "",
  },
  isNotification: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const signUp = () => {
  // signUp
};
</script>
<template>
  <Form @submit="signUp">
    <FormContainer>
      <FormHeading>
        <template #heading> Create an account </template>
        <template #sub-heading> Start your journey! </template>
      </FormHeading>
      <FormFields>
        <InputText
          :required="true"
          name="name"
          label="name"
          placeholder="Enter your name"
        />
        <InputText
          :required="true"
          name="email"
          label="email"
          placeholder="Enter your email"
        />
        <InputText
          :required="true"
          name="password"
          label="password"
          placeholder="Password"
        />
        <InputText
          :required="true"
          name="password_confirmation"
          label="Confirm password"
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
          <ButtonIntent
            :dialogToClose="currentDialog"
            dialogToOpen="dialogLogIn"
            >Log in</ButtonIntent
          >
        </p>
      </FormFooter>
    </FormContainer>
  </Form>
</template>
