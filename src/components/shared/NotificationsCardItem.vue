<script setup>
import { computed } from "vue";
import { getTimeDifference } from "@/utils/getTimeDifference.js";
import IconHeartFilled from "@/components/icons/IconHeartFilled.vue";
import IconCommented from "@/components/icons/IconCommented.vue";
const props = defineProps({
  notification: {
    type: Object,
    required: false,
  },
});

const reacted = computed(() => {
  return props.notification.type == "reacted";
});
const commented = computed(() => {
  return props.notification.type == "commented";
});

const createdAt = computed(() => {
  var currentDate = new Date();
  var notificationCreatedAt = new Date(props.notification.createdAt);
  var timeDifference = getTimeDifference(currentDate, notificationCreatedAt);
  return timeDifference;
});
const isNew = computed(() => {
  return !props.notification.seen;
});
</script>
<template>
  <div
    class="border-1 border-neutralGray rounded-lg text-neutralWhite text-lg flex flex-col md:flex-row md:items-center justify-between gap-2 px-6 py-5"
  >
    <div class="flex items-center gap-6">
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden">
        <img
          :src="notification.personImg"
          alt="personImg"
          class="w-full block object-cover"
        />
      </div>
      <div class="flex flex-col gap-1">
        <p>{{ notification.by }}</p>
        <div class="flex items-center gap-3">
          <div class="w-6 h-6">
            <IconHeartFilled v-if="reacted" />
            <IconCommented v-if="commented" />
          </div>
          <p
            v-if="commented"
            class="max-w-[150px] md:max-w-none truncate text-lightBlue text-base md:text-lg"
          >
            Commented to your movie quote
          </p>
          <p
            v-if="reacted"
            class="max-w-[150px] md:max-w-none truncate text-lightBlue text-base md:text-lg"
          >
            Reacted to your quote
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-row md:flex-col gap-6 md:gap-2 text-base md:text-lg">
      <p class="text-neutralGray order-2 md:order-1">{{ createdAt }} ago</p>
      <p v-if="isNew" class="capitalize text-neutralGreen order-1 md:order-2">
        new
      </p>
    </div>
  </div>
</template>
