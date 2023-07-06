<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/userStore.js";
import IconCamera from "@/components/icons/IconCamera.vue";
import IconCameraRed from "@/components/icons/IconCameraRed.vue";
import IconHome from "@/components/icons/IconHome.vue";
import IconHomeRed from "@/components/icons/IconHomeRed.vue";

const route = useRoute();
const userStore = useUserStore();
const { userName, userImg } = userStore;

const newsFeed = computed(() => {
  return route.name === "news-feed";
});
const movies = computed(() => {
  return route.name === "movies" || route.name === "movie-inspect";
});
const profile = computed(() => {
  return route.name === "profile";
});
</script>
<template>
  <aside
    class="flex-col gap-10 absolute w-full max-w-[250px] top-8 left-9 md:left-16 text-neutralWhite"
  >
    <div class="flex items-center gap-5 md:gap-6">
      <div
        class="w-10 md:w-14 rounded-full overflow-hidden border-1"
        :class="{
          'border-neutralRed': profile,
          'border-transparent': !profile,
        }"
      >
        <img :src="userImg" alt="useImg" class="block w-full object-cover" />
      </div>
      <div>
        <p class="text-base md:text-2xl capitalize">{{ userName }}</p>
        <router-link :to="{ name: 'profile' }" class="text-lightBlue"
          >Edit your profile</router-link
        >
      </div>
    </div>
    <router-link
      :to="{ name: 'news-feed' }"
      class="ml-2 flex items-center gap-8 md:gap-11"
    >
      <div class="w-6 md:w-8">
        <IconHomeRed v-if="newsFeed" class="block w-full object-cover" />
        <IconHome v-else class="block w-full object-cover" />
      </div>
      <span class="text-base md:text-2xl capitalize">News Feed</span>
    </router-link>
    <router-link
      :to="{ name: 'movies' }"
      class="ml-2 flex items-center gap-8 md:gap-11"
    >
      <div class="w-6 md:w-8">
        <IconCameraRed v-if="movies" class="block w-full object-cover" />
        <IconCamera v-else class="block w-full object-cover" />
      </div>
      <span class="text-base md:text-2xl capitalize">List Of Movies</span>
    </router-link>
  </aside>
</template>
