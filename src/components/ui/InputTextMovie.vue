<script setup>
import { Field, ErrorMessage, useField } from "vee-validate";
import { computed } from "vue";

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
    required: false,
    default: "",
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  lang: {
    type: String,
    required: false,
    default: "",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
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

const hasLang = computed(() => {
  return props.lang;
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <Field
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :rules="rules"
        class="w-full transition-all border-1 border-darkGray text-neutralWhite placeholder:text-neutralWhite bg-transparent py-2 px-3 rounded-md outline-none focus:ring text-lg focus:ring-darkGray focus:ring-opacity-20"
        :class="{
          'border-neutralRed': hasError,
          'border-neutralGreen': hasNotError,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <p
        v-if="hasLang"
        class="text-darkGray absolute top-3 right-5 text-base md:text-xl"
      >
        {{ props.lang }}
      </p>
    </div>
    <ErrorMessage
      as="p"
      class="text-dullRed font-normal text-sm"
      :name="props.name"
    />
  </div>
</template>
