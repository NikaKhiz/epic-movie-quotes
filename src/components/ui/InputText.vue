<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <label
      :for="name"
      class="text-neutralWhite text-base font-normal capitalize"
      >{{ label }} <sup v-if="required" class="text-shinyRed">*</sup></label
    >
    <Field
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :rules="rules"
      :v-model="model"
      class="transition-all text-darkBlack placeholder:text-darkGray bg-lightBlue py-2 px-3 rounded-md outline-none focus:ring focus:ring-lightishGray"
    />
    <ErrorMessage as="p" class="text-dullRed font-normal" :name="name" />
  </div>
</template>
