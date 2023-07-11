import axios from "@/plugins/axios/axiosMultipart.js";

export const addMovie = async (
  title,
  titleKa,
  genres,
  released,
  director,
  directorKa,
  description,
  descriptionKa,
  thumbnail
) => {
  const response = await axios.post("/api/movies", {
    title,
    title_ka: titleKa,
    genres,
    released,
    director,
    director_ka: directorKa,
    description,
    description_ka: descriptionKa,
    thumbnail,
  });
  return response;
};
export const updateMovie = async (
  title,
  titleKa,
  genres,
  released,
  director,
  directorKa,
  description,
  descriptionKa,
  thumbnail,
  movieId
) => {
  const response = await axios.post(`/api/movies/${movieId}`, {
    title,
    title_ka: titleKa,
    genres,
    released,
    director,
    director_ka: directorKa,
    description,
    description_ka: descriptionKa,
    thumbnail,
  });
  return response;
};
export const destroyMovie = async (movieId) => {
  const response = await axios.delete(`/api/movies/${movieId}`);
  return response;
};

export const getMovies = async () => {
  const response = await axios.get("/api/movies");
  return response;
};
export const getMovie = async (movieId) => {
  const response = await axios.get(`/api/movies/${movieId}`);
  return response;
};
