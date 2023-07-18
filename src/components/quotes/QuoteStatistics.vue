<script setup>
import { useQuoteStore } from "@/stores/quoteStore.js";
import { likeQuote } from "@/services/api/quotes";
import IconComment from "@/components/icons/IconComment.vue";
import IconHeartEmpty from "@/components/icons/IconHeartEmpty.vue";
import IconHeartFilled from "@/components/icons/IconHeartFilled.vue";
import { computed } from "vue";
const props = defineProps({
  quoteId: {
    type: Number,
    required: true,
  },
  likesNumber: {
    type: Number,
    required: false,
    default: 0,
  },
  commentsNumber: {
    type: Number,
    required: false,
    default: 0,
  },
});
const quoteStore = useQuoteStore();

const likeTheQuote = () => {
  likeQuote(props.quoteId).then((response) => {
    if (response.data.like) {
      quoteStore.$patch({
        users: quoteStore.users + 1,
        userLike: true,
      });
    } else {
      quoteStore.$patch({
        users: quoteStore.users - 1,
        userLike: false,
      });
    }
  });
};

const hasUserLiked = computed(() => {
  return quoteStore.userLike;
});
</script>
<template>
  <div
    class="flex items-center gap-6 py-4 md:py-6 border-b-1 border-darkGray text-base md:text-lg text-white"
  >
    <div class="flex items-center gap-3">
      <span>{{ props.commentsNumber }}</span>
      <div class="w-6 md:w-8">
        <IconComment class="w-full block object-cover" />
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>{{ props.likesNumber }}</span>
      <div class="w-6 md:w-8">
        <IconHeartEmpty
          v-if="!hasUserLiked"
          @click="likeTheQuote"
          class="w-full block object-cover cursor-pointer"
        />
        <IconHeartFilled
          v-if="hasUserLiked"
          @click="likeTheQuote"
          class="w-full block object-cover cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
