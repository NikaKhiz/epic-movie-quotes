<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useEditProfileStore } from "@/stores/editProfileStore.js";
import { computed } from "vue";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  isEditing: {
    type: Boolean,
    required: true,
  },
  isGoogleAccaunt: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const userStore = useUserStore();
const editProfileStore = useEditProfileStore();

const isPassword = computed(() => {
  return props.field == "password";
});

const googleAuth = computed(() => {
  return props.isGoogleAccaunt;
});
const handleEditing = () => {
  editProfileStore.$reset();
  editProfileStore[props.field].isEditing =
    !editProfileStore[props.field].isEditing;
  editProfileStore.isProfileEditing = true;
};
</script>
<template>
  <div class="flex flex-col gap-3">
    <p class="text-neutralWhite text-base capitalize">{{ props.label }}</p>
    <div class="flex items-center gap-8">
      <div
        class="w-full border-2 placeholder:text-darkGray bg-lightBlue py-2 px-3 rounded-md max-w-lg"
        :class="{
          'text-darkGray': isEditing,
          'text-darkBlack': !isEditing,
        }"
      >
        <span v-if="!isPassword">
          {{ userStore[field] }}
        </span>
        <span v-else> ************</span>
      </div>
      <button
        type="button"
        v-if="!googleAuth && !editProfileStore[props.field].isEditing"
        class="text-darkGray text-xl"
        @click="handleEditing"
      >
        Edit
      </button>
    </div>
  </div>
</template>
