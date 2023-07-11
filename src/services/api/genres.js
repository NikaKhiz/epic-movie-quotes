import axios from "@/plugins/axios";

export const getGenres = async () => {
  const response = await axios.get("/api/genres");
  return response;
};
