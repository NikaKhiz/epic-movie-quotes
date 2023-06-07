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
const signIn = () => {
  // signUp
};
</script>
<template>
  <Form @submit="signIn">
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
          placeholder="Enter your email"
        />
        <InputText
          :required="true"
          name="password"
          label="password"
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
          <ButtonIntent
            :dialogToClose="currentDialog"
            dialogToOpen="dialogPasswordRecovery"
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
          <ButtonIntent
            :dialogToClose="currentDialog"
            dialogToOpen="dialogSignUp"
            >Sign up</ButtonIntent
          >
        </p>
      </FormFooter>
    </FormContainer>
  </Form>
</template>
