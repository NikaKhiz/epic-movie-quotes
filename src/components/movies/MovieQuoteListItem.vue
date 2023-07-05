<script setup>
import IconDots from "@/components/icons/IconDots.vue";
import IconHeartEmpty from "@/components/icons/IconHeartEmpty.vue";
import IconComment from "@/components/icons/IconComment.vue";
defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="px-8 py-6 bg-darkBlack">
    <div class="flex flex-col gap-6 relative">
      <div
        class="flex flex-col md:flex-row items-center gap-9 text-darkGray pb-6 border-b-1 border-darkGray border-opacity-30"
      >
        <div class="w-full md:max-w-[220px] max-h-[140px] bg-red-500">
          <img
            :src="quote.quoteImg"
            alt="quoteImg"
            class="block w-full object-cover"
          />
        </div>
        <p class="text-darkGray text-2xl">"{{ quote.title }}"</p>
        <button
          @click="toggleAuthModals(useAuthModalStore(), 'modalEditQuote')"
          class="absolute bottom-0 right-0 md:bottom-full md:translate-y-2 py-3 md:py-0"
        >
          <IconDots />
        </button>
      </div>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <span class="text-neutralWhite text-xl">{{
            quote.comments.length
          }}</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <IconComment class="block w-full object-cover" />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-neutralWhite text-xl">{{ quote.likes }}</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <IconHeartEmpty class="block w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
