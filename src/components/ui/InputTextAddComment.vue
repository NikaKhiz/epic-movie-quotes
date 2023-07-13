<script setup>
import { Field, ErrorMessage, useField } from "vee-validate";
import { computed } from "vue";
import IconFieldInvalid from "@/components/icons/IconFieldInvalid.vue";
import IconFieldValid from "@/components/icons/IconFieldValid.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },

  modelValue: {
    type: String,
    required: false,
  },
});
defineEmits(["update:modelValue"]);

const field = useField(props.name, props.rules);
const hasError = computed(() => {
  return !field.meta.valid && field.meta.touched;
});
const hasNotError = computed(() => {
  return field.meta.valid && field.meta.touched;
});
</script>
<template>
  <div class="flex-1 flex flex-col gap-2">
    <div class="relative">
      <Field
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :rules="rules"
        class="bg-mediumBlack outline-none rounded-md text-base md:text-lg text-lightBlue placeholder:text-lightBlue px-4 md:px-6 py-3 w-full border-1"
        :class="{
          'border-neutralRed': hasError,
          'border-neutralGreen': hasNotError,
          'border-transparent': !hasNotError && !hasError,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <IconFieldInvalid
        v-if="hasError"
        class="absolute right-2 top-1/2 -translate-y-1/2"
      />
      <IconFieldValid
        v-if="hasNotError"
        class="absolute right-2 top-1/2 -translate-y-1/2"
      />
    </div>
    <ErrorMessage
      as="p"
      class="text-dullRed font-normal text-sm"
      :name="props.name"
    />
  </div>
</template>
