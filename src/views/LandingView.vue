<script setup>
import LandingLayout from "@/layouts/LandingLayout.vue";
import LandingHeaderUpper from "@/layouts/landing/LandingHeaderUpper.vue";
import LandingHeaderLower from "@/layouts/landing/LandingHeaderLower.vue";
</script>
<template>
  <LandingLayout>
    <template #landing-header-upper>
      <LandingHeaderUpper />
    </template>
    <template #landing-header-lower>
      <LandingHeaderLower />
    </template>
  </LandingLayout>
</template>
