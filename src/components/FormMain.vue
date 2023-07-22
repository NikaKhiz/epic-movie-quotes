<script setup>
import { Form } from "vee-validate";
import { inject } from "vue";

const mobileDimensions = inject("mobileDimensions");
</script>
<template>
  <Form
    class="max-w-2xl flex items-center justify-center md:bg-neutralBlack rounded-lg"
    :class="{
      'bg-darkBlack': !mobileDimensions,
      'bg-transparent': mobileDimensions,
    }"
  >
    <slot></slot>
  </Form>
</template>
