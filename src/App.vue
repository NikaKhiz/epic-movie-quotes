<script setup>
import ModalMain from "@/components/ModalMain.vue";
import { provide, ref } from "vue";
const notifications = ref([
  {
    id: 1,
    type: "commented",
    seen: false,
    createdAt: "2023-06-26 21:33:35",

    by: "person name",
    personImg: "/src/assets/images/person.svg",
  },
  {
    id: 2,
    type: "reacted",
    seen: true,
    createdAt: "2023-06-23 12:53:35",
    by: "person name 2",
    personImg: "/src/assets/images/person.svg",
  },
]);
provide("notifications", notifications);
</script>

<template>
  <router-view></router-view>
  <ModalMain />
</template>

<style scoped></style>
