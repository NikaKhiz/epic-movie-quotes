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

export const login = async (email, password) => {
  const response = await axios.post(
    "/login",
    JSON.stringify({
      email,
      password,
    })
  );
  return response;
};

export const recoverPassword = async (email) => {
  const response = await axios.post(
    "/forgot-password",
    JSON.stringify({
      email,
    })
  );
  return response;
};
