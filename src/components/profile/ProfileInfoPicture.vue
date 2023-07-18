<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useEditProfileStore } from "@/stores/editProfileStore.js";
import { Field, ErrorMessage, useField } from "vee-validate";
import ProfileImageDefault from "@/components/shared/ProfileImageDefault.vue";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "file",
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: false,
  },
});
const editProfileStore = useEditProfileStore();
const userStore = useUserStore();
const field = useField(props.name, props.rules);

const handleFileChange = (e) => {
  editProfileStore.$reset();
  editProfileStore.profile_picture.value = e.target.files[0];
  editProfileStore.profile_picture.isEditing = true;
  editProfileStore.isProfileEditing = true;
};
const updatedPicture = computed(() => {
  return (
    editProfileStore.profile_picture.value &&
    editProfileStore.profile_picture.value.name
  );
});
const hasNotError = computed(() => {
  return editProfileStore.profile_picture.isEditing && field.meta.valid;
});
</script>
<template>
  <div class="relative flex flex-col justify-center items-center gap-2">
    <div class="w-44 h-44 rounded-full overflow-hidden">
      <img
        v-if="userStore.profile_picture"
        :src="userStore.profile_picture"
        alt="profilePicture"
        class="w-full h-full block object-cover"
      />
      <ProfileImageDefault v-else :userName="userStore.userName" />
    </div>
    <label
      :for="name"
      class="text-neutralWhite rounded-sm cursor-pointer text-base md:text-xl"
    >
      <Field
        :type="type"
        :name="name"
        :id="name"
        :rules="rules"
        class="hidden"
        @change="handleFileChange"
      />
      Upload new photo
    </label>
    <ErrorMessage
      as="p"
      class="absolute -bottom-5 left-1 text-dullRed font-normal text-sm"
      :name="name"
    />
    <span
      v-if="hasNotError"
      class="absolute top-full text-neutralWhite font-normal text-sm"
    >
      image: {{ updatedPicture }}
    </span>
  </div>
</template>
