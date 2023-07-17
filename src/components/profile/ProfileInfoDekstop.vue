<script setup>
import { Form } from "vee-validate";
import { useEditProfileStore } from "@/stores/editProfileStore.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { useUserStore } from "@/stores/userStore";
import { computed } from "vue";
import { updateProfile } from "@/services/api/updateProfile";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import InputText from "@/components/ui/InputText.vue";
import ProfileInfoPicture from "@/components/profile/ProfileInfoPicture.vue";
import ProfileInfoBarDekstop from "@/components/profile/ProfileInfoBarDekstop.vue";
import ProfileFlushMessage from "@/components/profile/ProfileFlushMessage.vue";

const editProfileStore = useEditProfileStore();
const backErrorsStore = useBackErrorsStore();
const userStore = useUserStore();

const isGoogleAccaunt = computed(() => {
  return userStore.isGoogleAccaunt;
});
const isNameUpdating = computed(() => {
  return editProfileStore.userName.isEditing;
});
const isEmailUpdating = computed(() => {
  return editProfileStore.userEmail.isEditing;
});
const isPasswordUpdating = computed(() => {
  return editProfileStore.password.isEditing;
});
const isProfileEditing = computed(() => {
  return editProfileStore.isProfileEditing;
});

const onSubmit = () => {
  const {
    userName,
    userEmail,
    profile_picture,
    password,
    passwordConfirmation,
  } = editProfileStore;
  updateProfile(
    userName.value,
    userEmail.value,
    profile_picture.value,
    password.value,
    passwordConfirmation
  ).then((response) => {
    userStore.userName = response.data.name
      ? editProfileStore.userName.value
      : userStore.userName;
    userStore.profile_picture = response.data.profile_picture
      ? URL.createObjectURL(editProfileStore.profile_picture.value)
      : userStore.profile_picture;
    editProfileStore.$reset();
    editProfileStore.changesMade = true;
    setTimeout(() => {
      editProfileStore.changesMade = false;
    }, 3000);
  });
};

const closeProfileEditing = () => {
  editProfileStore.$reset();
};
</script>
<template>
  <Form
    @submit="onSubmit"
    class="relative flex flex-col gap-10 bg-darkBlack rounded-lg mt-24 pt-40 pb-24 px-52"
  >
    <ProfileInfoPicture
      class="text-5xl absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
      name="profile_picture"
      rules="image"
    />
    <ProfileInfoBarDekstop
      label="Username"
      field="userName"
      :isEditing="isNameUpdating"
    />
    <InputText
      v-if="isNameUpdating"
      name="name"
      label="New Username"
      rules="required|alpha|min:6|max:255"
      placeholder="Enter new username"
      :backEndError="backErrorsStore.errors"
      v-model="editProfileStore.userName.value"
      class="max-w-lg"
    />
    <ProfileInfoBarDekstop
      label="Email"
      field="userEmail"
      :isGoogleAccaunt="isGoogleAccaunt"
      :isEditing="isEmailUpdating"
    />
    <InputText
      v-if="isEmailUpdating"
      name="email"
      label="New email"
      rules="required|email"
      placeholder="Enter new email"
      :backEndError="backErrorsStore.errors"
      v-model="editProfileStore.userEmail.value"
      class="max-w-lg"
    />
    <div v-if="!isGoogleAccaunt" class="flex flex-col gap-10">
      <ProfileInfoBarDekstop
        label="Password"
        field="password"
        :isEditing="isPasswordUpdating"
      />
      <div v-if="isPasswordUpdating" class="flex flex-col gap-10">
        <div
          class="rounded-md max-w-lg p-6 border-1 border-darkGray flex flex-col gap-4"
        >
          <p class="text-neutralWhite text-base">Password should contain:</p>
          <ul class="text-sm text-neutralWhite list-disc">
            <li class="text-darkGray">8 or more character</li>
            <li>15 lowercase character</li>
          </ul>
        </div>
        <InputText
          type="password"
          name="password"
          label="password"
          rules="required|alpha_numeric|min:8|max:15"
          placeholder="At least 8 & max.15 lower case characters"
          :backEndError="backErrorsStore.errors"
          v-model="editProfileStore.password.value"
          class="max-w-lg"
        />
        <InputText
          type="password"
          name="confirmation"
          label="Confirm password"
          rules="required|confirmed:@password"
          placeholder="Confirm Password"
          :backEndError="backErrorsStore.errors"
          v-model="editProfileStore.passwordConfirmation"
          class="max-w-lg"
        />
      </div>
    </div>
    <div
      v-if="isProfileEditing"
      class="absolute top-full translate-y-16 right-0 flex items-center gap-6"
    >
      <button
        type="button"
        @click="closeProfileEditing"
        class="text-darkGray text-xl"
      >
        Cancel
      </button>
      <ButtonPrimary>Save Changes</ButtonPrimary>
    </div>
    <ProfileFlushMessage />
  </Form>
</template>
