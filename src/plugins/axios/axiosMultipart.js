import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export default axios.create(defaultOptions);
