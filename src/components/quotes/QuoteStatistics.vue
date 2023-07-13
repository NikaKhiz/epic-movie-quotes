<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useMoviesStore } from "@/stores/moviesStore.js";
import { useQuoteStore } from "@/stores/quoteStore.js";
import { getMovie } from "@/services/api/movies.js";
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
  likes: {
    type: Array,
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
const userStore = useUserStore();
const moviesStore = useMoviesStore();
const quoteStore = useQuoteStore();

const likeTheQuote = () => {
  likeQuote(props.quoteId).then(() => {
    getMovie(moviesStore.currentMovie.id).then((response) => {
      moviesStore.currentMovie = response.data.movie;
      const newQuote = moviesStore.currentMovie.quotes.find(
        (item) => item.id === props.quoteId
      );
      quoteStore.$patch(newQuote);
    });
  });
};

const hasUserLiked = computed(() => {
  return props.likes.find(
    (item) =>
      item.quote_id === props.quoteId && item.user.name === userStore.userName
  );
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
        <IconHeartFilled
          v-if="hasUserLiked"
          @click="likeTheQuote"
          class="w-full block object-cover cursor-pointer"
        />
        <IconHeartEmpty
          v-else
          @click="likeTheQuote"
          class="w-full block object-cover cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
