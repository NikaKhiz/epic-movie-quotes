<script setup>
import LandingLayout from "@/layouts/LandingLayout.vue";
import LandingHeaderUpper from "@/layouts/landing/LandingHeaderUpper.vue";
import LandingHeaderLower from "@/layouts/landing/LandingHeaderLower.vue";
import LandingFooter from "@/layouts/landing/LandingFooter.vue";
</script>
<template>
  <LandingLayout>
    <template #landing-header-upper>
      <LandingHeaderUpper />
    </template>
    <template #landing-header-lower>
      <LandingHeaderLower />
    </template>
    <template #landing-footer>
      <LandingFooter />
    </template>
  </LandingLayout>
</template>
