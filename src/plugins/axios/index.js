import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_REGISTER_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default axios.create(defaultOptions);
