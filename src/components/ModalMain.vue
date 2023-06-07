<script setup>
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";
import { useModalStore } from "@/stores/modalStore.js";
import { computed } from "vue";

const props = defineProps({
  buttonSize: {
    type: String,
    required: false,
    default: "large",
  },
  buttonLabel: {
    type: String,
    required: false,
    default: "Sign up",
  },
  currentDialog: {
    type: String,
    required: true,
  },
});

const modalStore = useModalStore();

const availableForms = {
  dialogSignUp: null,
  dialogGetStarted: null,
  dialogLogIn: null,
};

const selectedComponent = computed(() => {
  return availableForms[props.currentDialog];
});
const signInDialog = computed(() => {
  return props.currentDialog === "dialogLogIn";
});

const fullScreenModal = computed(() => {
  return window.innerWidth <= 380;
});
</script>
<template>
  <v-dialog
    transition="dialog-top-transition"
    v-model="modalStore[currentDialog]"
    class="w-full md:max-w-2xl"
    :class="{ 'bg-darkBlack align-start ': fullScreenModal }"
  >
    <template v-slot:activator="{ props }">
      <ButtonPrimary v-bind="props" :size="buttonSize" v-if="!signInDialog">
        {{ buttonLabel }}
      </ButtonPrimary>
      <ButtonSecondary v-bind="props" :size="buttonSize" v-if="signInDialog">
        {{ buttonLabel }}
      </ButtonSecondary>
    </template>
    <div
      class="max-w-2xl p-4 flex items-center justify-center md:bg-neutralBlack md:py-14 rounded-lg"
      :class="{
        'bg-darkBlack': !fullScreenModal,
        'bg-transparent': fullScreenModal,
      }"
    >
      <component
        :is="selectedComponent"
        :currentDialog="props.currentDialog"
        class="w-full max-w-sm"
      ></component>
    </div>
  </v-dialog>
</template>
