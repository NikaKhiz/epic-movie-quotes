<script setup>
import { Form } from "vee-validate";
import { useEditProfileStore } from "@/stores/editProfileStore.js";
import { useBackErrorsStore } from "@/stores/backEndValidationStore.js";
import { useUserStore } from "@/stores/userStore";
import { computed } from "vue";
import { updateProfile } from "@/services/api/updateProfile";
import { isBackEndErrors } from "@/utils/isBackEndErrors.js";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import InputText from "@/components/ui/InputText.vue";
import ProfileInfoPicture from "@/components/profile/ProfileInfoPicture.vue";
import ProfileInfoBarMobile from "@/components/profile/ProfileInfoBarMobile.vue";
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
const isPictureUpdating = computed(() => {
  return editProfileStore.profile_picture.isEditing;
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
  )
    .then((response) => {
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
    })
    .catch((error) => {
      backErrorsStore.errors = isBackEndErrors(error.response);
    });
};

const finalStep = () => {
  editProfileStore.confirmSubmission = true;
};
const readyToSubmit = computed(() => {
  return editProfileStore.confirmSubmission;
});

const closeProfileEditing = () => {
  editProfileStore.$reset();
};
</script>
<template>
  <Form @submit="onSubmit" class="p-8 bg-mediumBlack">
    <div
      class="relative flex flex-col gap-10"
      v-if="!isProfileEditing && !readyToSubmit"
    >
      <ProfileInfoPicture
        class="text-5xl"
        name="profile_picture"
        rules="image"
      />
      <ProfileInfoBarMobile
        label="Username"
        field="userName"
        :isEditing="isNameUpdating"
      />
      <ProfileInfoBarMobile
        label="email"
        field="userEmail"
        :isEditing="isNameUpdating"
      />
      <ProfileInfoBarMobile
        v-if="!isGoogleAccaunt"
        label="password"
        field="password"
        :isEditing="isNameUpdating"
      />
    </div>

    <div v-if="isProfileEditing && !readyToSubmit" class="flex flex-col gap-8">
      <div class="bg-mediumBlack py-20">
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
        <div v-if="isPasswordUpdating" class="flex flex-col gap-4">
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
        <div v-if="isPictureUpdating" class="flex flex-col gap-4">
          <ProfileInfoPicture
            rules="image"
            name="profile_picture"
            class="text-5xl"
          />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="button"
          @click="closeProfileEditing"
          class="text-darkGray text-xl"
        >
          Cancel
        </button>
        <ButtonPrimary @click="finalStep">Edit</ButtonPrimary>
      </div>
    </div>
    <div v-if="readyToSubmit">
      <div
        class="py-16 border-b-1 border-darkGray text-neutralWhite text-center"
      >
        <span> Are you sure to make changes ? </span>
      </div>
      <div class="flex items-center justify-between p-6">
        <button
          type="button"
          @click="closeProfileEditing"
          class="text-darkGray text-xl"
        >
          Cancel
        </button>
        <ButtonPrimary>confirm</ButtonPrimary>
      </div>
    </div>
    <ProfileFlushMessage />
  </Form>
</template>
