<script setup>
import { activateModal } from "@/utils/toggleAuthModals.js";
import { useAuthModalStore } from "@/stores/authModalStore.js";
import { computed } from "vue";
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconAdd from "@/components/icons/IconAdd.vue";
import MovieQuoteListItem from "@/components/movies/MovieQuoteListItem.vue";

const props = defineProps({
  quotes: {
    type: Array,
    required: false,
    default: () => [],
  },
});
const authModalStore = useAuthModalStore();

const totalQuotes = computed(() => {
  return props.quotes.length;
});
</script>
<template>
  <div
    class="mt-8 md:w-1/2 text-2xl flex flex-col md:flex-row md:items-center md:gap-4 gap-8 text-neutralWhite"
  >
    <span class="order-3 md:order-1">All Quotes ({{ totalQuotes }}) </span
    ><span class="text-darkGray order-2 hidden md:block">|</span>
    <div
      class="border-1 order-2 md:hidden border-neutralGray border-opacity-30"
    ></div>
    <ButtonPrimary
      @click="activateModal(authModalStore, 'modalAddQuote')"
      class="max-w-max min-w-max order-1 md:order-3"
    >
      <div class="flex items-center gap-2">
        <IconAdd />
        <span>Add Quote</span>
      </div>
    </ButtonPrimary>
  </div>
  <div class="rounded-md mt-14 flex flex-col gap-10 md:w-1/2">
    <MovieQuoteListItem
      v-for="quote in quotes"
      :key="quote.id"
      :quote="quote"
    />
  </div>
</template>
