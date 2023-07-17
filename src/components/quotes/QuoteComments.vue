<script setup>
import ProfileImageDefault from "@/components/shared/ProfileImageDefault.vue";
defineProps({
  comments: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>
<template>
  <div class="max-h-[300px] overflow-y-auto">
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="flex flex-col gap-4 md:gap-6"
    >
      <div
        class="flex flex-col gap-3 md:gap-4 py-6 border-b-1 border-darkGray text-white text-base md:text-lg"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 md:h-12 md:w-12 rounded-full overflow-hidden"
            v-if="comment.user.profile_picture"
          >
            <img :src="comment.user.profile_picture" alt="personimg" />
          </div>
          <div
            class="w-10 h-10 md:h-12 md:w-12 rounded-full overflow-hidden"
            v-else
          >
            <ProfileImageDefault :userName="comment.user.name" />
          </div>
          <p class="capitalize">{{ comment.user.name }}</p>
        </div>
        <div class="md:pl-16 pr-4">
          {{ comment.comment }}
        </div>
      </div>
    </div>
  </div>
</template>
