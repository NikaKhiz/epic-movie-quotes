<script setup>
import { useModalStore } from "@/stores/modalStore";
import { toggleModal } from "@/utils/toggleModal.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { useLoginStore } from "@/stores/loginStore.js";
import { login } from "@/services/api/auth";
import { isBackEndErrors } from "@/utils/isBackEndErrors.js";
import { authViaGoogle } from "@/utils/googleAuthentication.js";
import { useRouter } from "vue-router";
import { getUserInfo } from "@/services/api/auth.js";
import { useUserStore } from "@/stores/userStore.js";
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

const modalStore = useModalStore();
const backErrorsStore = useBackErrorsStore();
const loginStore = useLoginStore();
const userStore = useUserStore();
const router = useRouter();

const signIn = async () => {
  axios.get("sanctum/csrf-cookie").then(() => {
    login(loginStore.email, loginStore.password)
      .then((response) => {
        if (response.status === 204) {
          localStorage.setItem("isAuthed", JSON.stringify(true));
          toggleModal(modalStore, "");
          router.push({ name: "movies" });
          loginStore.$reset();
          getUserInfo()
            .then(() => {
              userStore.userName = response.data.user.name;
              userStore.userEmail = response.data.user.email;
              userStore.isGoogleAccaunt = response.data.user.google_accaunt;
              localStorage.setItem("isAuthed", true);
            })
            .catch(() => {
              userStore.$reset();
              localStorage.setItem("isAuthed", false);
            });
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          toggleModal(modalStore, "emailVerification");
        } else {
          backErrorsStore.errors = isBackEndErrors(error.response);
        }
        loginStore.password = "";
        setTimeout(() => {
          backErrorsStore.$reset();
        }, 3000);
      });
  });
};
</script>
<template>
  <FormMain @submit="signIn">
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
          rules="required|email"
          placeholder="Enter your email"
          :backEndError="backErrorsStore.errors"
          v-model="loginStore.email"
        />
        <InputText
          type="password"
          :required="true"
          name="password"
          label="password"
          rules="required|min:8|max:15"
          placeholder="Password"
          :backEndError="backErrorsStore.errors"
          v-model="loginStore.password"
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
          <ButtonSecondary type="button" @click="authViaGoogle">
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
