<script setup>
import ButtonLanguage from "@/components/ui/buttons/ButtonLanguage.vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import ButtonSecondary from "@/components/ui/buttons/ButtonSecondary.vue";
</script>
<template>
  <div class="flex items-center justify-between py-7 md:py-9 px-4 md:px-16">
    <h2 class="uppercase text-brownyWhite">Movie quotes</h2>
    <div class="flex items-center gap-4">
      <ButtonLanguage>Eng</ButtonLanguage>
      <ButtonPrimary size="small">Sign up</ButtonPrimary>
      <ButtonSecondary>Log in</ButtonSecondary>
    </div>
  </div>
</template>
