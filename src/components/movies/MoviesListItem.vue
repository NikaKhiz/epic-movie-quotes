<script setup>
import { computed } from "vue";
import IconCommented from "@/components/icons/IconCommented.vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
const movieQuotes = computed(() => {
  return props.movie.quotes && props.movie.quotes.length;
});
</script>

<template>
  <div
    class="font-medium text-neutralWhite rounded-md overflow-hidden flex flex-col gap-4"
  >
    <div class="w-full h-[400px]">
      <img
        :src="movie.thumbnail"
        alt="movieImg"
        class="block w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col gap-4">
      <router-link :to="`/movies/${props.movie.id}`" class="uppercase text-2xl">
        {{ movie.title }} <span>({{ movie.released }})</span>
      </router-link>
      <div class="text-xl flex items-center gap-2">
        <p>{{ movieQuotes ?? 0 }}</p>
        <div class="w-6 h-6 flex items-center justify-center">
          <IconCommented class="block w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>
