import { defineStore } from "pinia";

export const useEditProfileStore = defineStore("editProfileStore", {
  state: () => {
    return {
      isProfileEditing: false,
      userName: {
        value: "",
        isEditing: false,
      },
      userEmail: {
        value: "",
        isEditing: false,
      },
      profile_picture: {
        value: null,
        isEditing: false,
      },
      password: {
        value: "",
        isEditing: false,
      },
      passwordConfirmation: "",
      changesMade: false,
      confirmSubmission: false,
    };
  },
});
