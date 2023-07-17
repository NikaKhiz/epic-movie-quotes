import axios from "@/plugins/axios/axiosMultipart.js";

export const updateProfile = async (
  userName,
  userEmail,
  profilePicture,
  password,
  passwordConfirmation
) => {
  const response = await axios.post("/api/user/update", {
    name: userName,
    email: userEmail,
    profile_picture: profilePicture,
    password: password,
    password_confirmation: passwordConfirmation,
  });
  return response;
};

export const updateVerifiedEmail = async (verificationUrl, email) => {
  const response = await axios.post(verificationUrl, { email: email });
  return response;
};
