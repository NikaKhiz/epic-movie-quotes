<script setup>
import { Field, ErrorMessage, useField } from "vee-validate";
import { computed } from "vue";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  lang: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});
defineEmits(["update:modelValue"]);

const showLabel = computed(() => {
  return props.modelValue == "";
});
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
    <div class="relative">
      <Field
        as="textarea"
        :type="type"
        :name="name"
        :id="name"
        :rules="rules"
        class="w-full transition-all border-1 border-darkGray text-neutralWhite placeholder:text-neutralWhite bg-transparent py-2 px-3 rounded-md outline-none focus:ring text-lg focus:ring-darkGray focus:ring-opacity-20"
        :value="modelValue"
        :class="{
          'border-neutralRed': hasError,
          'border-neutralGreen': hasNotError,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <p
        class="text-neutralWhite absolute top-3 left-3 text-base md:text-xl"
        v-if="showLabel"
      >
        {{ props.label }}
      </p>
      <p class="text-darkGray absolute top-3 right-5 text-base md:text-xl">
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
