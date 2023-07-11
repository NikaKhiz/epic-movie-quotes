<script setup>
import { Field, ErrorMessage, useField } from "vee-validate";
import { useAddMoviesStore } from "@/stores/addMoviesStore.js";
import { computed, ref } from "vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";
import IconExit from "@/components/icons/IconExit.vue";
const props = defineProps({
  genres: {
    type: Array,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const addMoviesStore = useAddMoviesStore();
const hasGanresChosen = computed(() => {
  return addMoviesStore.genres.length > 0;
});
const showGenres = ref(false);
const toggleShowGenres = () => {
  showGenres.value = !showGenres.value;
};
const deleteFromGenres = (id) => {
  const newGenres = addMoviesStore.genres.filter((item) => item.id !== id);
  addMoviesStore.genres = newGenres;
};

const field = useField(props.name, props.rules);
const hasError = computed(() => {
  return !field.meta.valid && field.meta.errors.length;
});
const hasNotError = computed(() => {
  return field.meta.valid && !field.meta.errors.length;
});
</script>
<template>
  <div
    class="relative cursor-pointer rounded-md w-full py-2 px-3 border-1 border-darkGray text-neutralWhite"
    :class="{
      'border-neutralRed': hasError,
      'border-neutralGreen': hasNotError,
    }"
  >
    <div class="flex items-center gap-2" @click.prevent="toggleShowGenres">
      <div
        v-if="!hasGanresChosen"
        class="w-full flex items-center justify-between"
      >
        <p class="capitalize text-base md:text-xl">Genres</p>
        <IconDropdown />
      </div>
      <div class="flex items-center gap-2" v-else>
        <div
          v-for="genre in addMoviesStore.genres"
          :key="genre"
          class="flex items-center gap-2 p-2 text-xs bg-darkGray text-neutralWhite rounded-md"
        >
          <p>
            {{ genre.genre }}
          </p>
          <IconExit @click="deleteFromGenres(genre.id)" class="w-2 h-2" />
        </div>
      </div>
    </div>
    <ul
      v-if="showGenres"
      class="overflow-y-auto max-h-20 px-4 py-2 absolute z-10 top-full left-0 w-full flex flex-col gap-2 rounded-b-md text-neutralWhite bg-darkerBlack"
    >
      <li v-for="genre in genres" :key="genre.id">
        <label :for="`genre-${genre.id}`">
          <Field
            class="hidden"
            type="checkbox"
            :id="`genre-${genre.id}`"
            :name="props.name"
            :value="genre"
            :rules="rules"
            v-model="addMoviesStore.genres"
          />
          <span class="cursor-pointer text-sm">{{ genre.genre }}</span>
        </label>
      </li>
    </ul>
  </div>

  <ErrorMessage
    as="p"
    class="text-dullRed font-normal text-sm"
    :name="props.name"
  />
</template>
