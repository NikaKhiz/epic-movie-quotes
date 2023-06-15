<script setup>
import { Field, ErrorMessage, useField } from "vee-validate";
import { computed } from "vue";
import FormFieldBackEndError from "@/components/FormFieldBackEndError.vue";
import IconFieldInvalid from "@/components/icons/IconFieldInvalid.vue";
import IconFieldValid from "@/components/icons/IconFieldValid.vue";

const props = defineProps({
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
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  backEndError: {
    type: Object,
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
  <div class="flex flex-col gap-2">
    <label
      :for="name"
      class="text-neutralWhite text-base font-normal capitalize"
      >{{ label }} <sup v-if="required" class="text-shinyRed">*</sup></label
    >
    <div class="relative">
      <Field
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :rules="rules"
        class="w-full transition-all border-2 text-darkBlack placeholder:text-darkGray bg-lightBlue py-2 px-3 rounded-md outline-none focus:ring focus:ring-lightishGray"
        :class="{
          'border-neutralRed': hasError,
          'border-neutralGreen': hasNotError,
        }"
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
    <FormFieldBackEndError
      v-if="backEndError[name]"
      :errors="backEndError[name]"
    />
    <ErrorMessage
      as="p"
      class="text-dullRed font-normal text-sm"
      :name="props.name"
    />
  </div>
</template>
