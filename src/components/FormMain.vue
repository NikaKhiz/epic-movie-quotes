<script setup>
import { Form } from "vee-validate";
import { inject } from "vue";

const fullScreenModal = inject("fullScreenModal");
</script>
<template>
  <Form
    class="max-w-2xl flex items-center justify-center md:bg-neutralBlack rounded-lg"
    :class="{
      'bg-darkBlack': !fullScreenModal,
      'bg-transparent': fullScreenModal,
    }"
  >
    <slot></slot>
  </Form>
</template>
