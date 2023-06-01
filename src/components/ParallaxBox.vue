<script setup>
import { toRefs } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: false,
  },
});
const { image, name, quote, releaseDate } = toRefs(props.movie);
</script>

<template>
  <div
    class="main min-w-screen min-h-screen bg-no-repeat bg-center bg-cover bg-fixed grid items-center px-9 md:px-44"
    :style="{ 'background-image': image }"
  >
    <div class="flex gap-2 md:gap-4 items-start">
      <div class="mt-2 md:mt-8 w-4 md:w-14 h-[1px] bg-neutralWhite"></div>
      <div class="flex flex-col">
        <h2
          class="text-neutralWhite font-bold text-xl md:text-5xl max-w-xs md:max-w-4xl leading-[150%] md:leading-[150%]"
        >
          {{ quote }}
        </h2>
        <p
          class="font-bold text-neutralGray text-base md:text-3xl leading-[150%] md:leading-[150%]"
        >
          <span>{{ name }},</span>
          <span>{{ releaseDate }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
