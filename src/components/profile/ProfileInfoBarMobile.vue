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
        class="flex items-center justify-between w-full border-b-1 border-darkGray bg-transparent py-2 max-w-lg text-neutralWhite"
      >
        <span v-if="!isPassword">
          {{ userStore[field] }}
        </span>
        <span v-else> ************</span>
        <button
          type="button"
          v-if="!googleAuth"
          class="text-darkGray text-base"
          @click="handleEditing"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
