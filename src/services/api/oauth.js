import axios from "@/plugins/axios";

export const googleRedirect = async () => {
  const response = await axios.get("/api/auth/google/redirect");
  return response;
};
export const googleCallback = async () => {
  const queryString = window.location.search;
  const response = await axios.get("/api/auth/google/callback" + queryString);
  return response;
};
