import axios from "@/plugins/axios/axiosMultipart.js";

export const addQuote = async (title, titleKa, thumbnail, movieId) => {
  const response = await axios.post("/api/quotes", {
    title,
    title_ka: titleKa,
    thumbnail,
    movie_id: movieId,
  });
  return response;
};
export const updateQuote = async (title, titleKa, thumbnail, quoteId) => {
  const response = await axios.post(`/api/quotes/${quoteId}`, {
    title,
    title_ka: titleKa,
    thumbnail,
  });
  return response;
};
export const destroyQuote = async (quoteId) => {
  const response = await axios.delete(`/api/quotes/${quoteId}`);
  return response;
};

export const getQuotes = async () => {
  const response = await axios.get("/api/quotes");
  return response;
};
export const getQuote = async (quoteId) => {
  const response = await axios.get(`/api/quotes/${quoteId}`);
  return response;
};

export const addComment = async (comment, quoteId) => {
  const response = await axios.post(`/api/quotes/${quoteId}/comment`, {
    comment,
    quote_id: quoteId,
  });
  return response;
};

export const likeQuote = async (quoteId) => {
  const response = await axios.get(`/api/quotes/${quoteId}/like`);
  return response;
};

export const getLikes = async (quoteId) => {
  const response = await axios.get(`/api/quotes/${quoteId}/liked`);
  return response;
};
