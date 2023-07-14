<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { useAddCommentStore } from "@/stores/addCommentStore.js";
import { Form } from "vee-validate";
import { addComment } from "@/services/api/quotes.js";
import { useQuoteStore } from "@/stores/quoteStore.js";
import InputTextAddComment from "@/components/ui/InputTextAddComment.vue";
import ProfileImageDefault from "@/components/shared/ProfileImageDefault.vue";

const props = defineProps({
  quoteId: {
    type: Number,
    required: true,
  },
});
const userStore = useUserStore();
const addCommentStore = useAddCommentStore();
const quoteStore = useQuoteStore();
const { userImg, userName } = userStore;
const addNewComment = () => {
  addComment(addCommentStore.comment, props.quoteId).then(() => {
    quoteStore.comments.push({
      user: {
        name: userStore.userName,
        email: userStore.userEmail,
        profile_picture: userStore.profile_picture,
      },
      comment: addCommentStore.comment,
    });
    addCommentStore.$reset();
  });
};
</script>
<template>
  <div class="flex items-center gap-4">
    <div
      class="w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden"
      v-if="userImg"
    >
      <img :src="userImg" alt="currentUser" class="w-full block object-cover" />
    </div>
    <ProfileImageDefault v-else :userName="userName" />
    <Form class="w-full" @submit="addNewComment">
      <InputTextAddComment
        name="comment"
        placeholder="Write a comment"
        rules="required|min:6|max:255|alpha_spaces"
        v-model="addCommentStore.comment"
      />
    </Form>
  </div>
</template>
