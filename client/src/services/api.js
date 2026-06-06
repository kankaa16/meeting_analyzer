import axios from "axios";

const api = axios.create({
  baseURL: "https://meeting-analyzer-1hg4.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default api;