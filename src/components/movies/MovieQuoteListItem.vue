<script setup>
import { computed, onMounted, ref } from "vue";
import { useQuoteStore } from "@/stores/quoteStore.js";
import { useEditQuoteStore } from "@/stores/editQuoteStore.js";
import { getLikes } from "@/services/api/quotes";
import IconDots from "@/components/icons/IconDots.vue";
import IconHeartEmpty from "@/components/icons/IconHeartEmpty.vue";
import IconHeartFilled from "@/components/icons/IconHeartFilled.vue";
import IconComment from "@/components/icons/IconComment.vue";
import ModalActionsQuote from "../quotes/ModalActionsQuote.vue";
const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});

const quoteStore = useQuoteStore();
const editQuoteStore = useEditQuoteStore();
onMounted(() => {
  quoteStore.$patch(props.quote);
  editQuoteStore.$patch(props.quote);
  getLikes(props.quote.id).then((response) => {
    if (response.data.liked == true) {
      quoteStore.userLike = true;
    }
  });
});

const hasUserLiked = computed(() => {
  return quoteStore.userLike;
});

const totalComments = computed(() => {
  return quoteStore.comments.length ?? 0;
});
const totalLikes = computed(() => {
  return quoteStore.users ?? 0;
});

const isModalActionsOpen = ref(false);
const toggleModalActions = () => {
  isModalActionsOpen.value = !isModalActionsOpen.value;
};
const closeActionsModal = () => {
  isModalActionsOpen.value = false;
};
</script>
<template>
  <div class="px-8 py-6 bg-darkBlack">
    <div class="flex flex-col gap-6 relative">
      <div
        class="flex flex-col md:flex-row items-center gap-9 text-darkGray pb-6 border-b-1 border-darkGray border-opacity-30"
      >
        <div class="w-full md:max-w-[220px] h-[140px] overflow-hidden">
          <img
            :src="quote.thumbnail"
            alt="quoteImg"
            class="block w-full h-full object-cover"
          />
        </div>
        <p class="text-darkGray text-2xl">"{{ quote.title }}"</p>
        <button
          @click="toggleModalActions"
          class="absolute bottom-0 right-0 md:bottom-full md:translate-y-2 py-3 md:py-0"
        >
          <IconDots />
        </button>
        <ModalActionsQuote
          v-if="isModalActionsOpen"
          v-click-outside="closeActionsModal"
          :quote="quote"
        />
      </div>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <span class="text-neutralWhite text-xl">{{ totalComments }}</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <IconComment class="block w-full object-cover" />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-neutralWhite text-xl">{{ totalLikes }}</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <IconHeartEmpty
              v-if="!hasUserLiked"
              class="block w-full object-cover"
            />
            <IconHeartFilled v-else class="block w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
