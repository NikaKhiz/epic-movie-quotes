import axios from "@/plugins/axios";

export const register = async (name, email, password, passwordConfirmation) => {
  const response = await axios.post(
    "/api/register",
    JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
  );
  return response;
};

export const verifyEmail = async (verificationUrl) => {
  const response = await axios.get(verificationUrl);
  return response;
};

export const login = async (email, password) => {
  const response = await axios.post(
    "/api/login",
    JSON.stringify({
      email,
      password,
    })
  );
  return response;
};

export const logoutUser = async () => {
  const response = await axios.get("/api/logout");
  return response;
};

export const recoverPassword = async (email) => {
  const response = await axios.post(
    "/api/forgot-password",
    JSON.stringify({
      email,
    })
  );
  return response;
};

export const resetPassword = async (
  email,
  token,
  password,
  passwordConfirmation
) => {
  const response = await axios.post(
    "/api/reset-password",
    JSON.stringify({
      email,
      token,
      password,
      password_confirmation: passwordConfirmation,
    })
  );
  return response;
};

export const getUserInfo = () => {
  const response = axios.get("/api/user");
  return response;
};
