import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000",
  withCredentials: false,
});

// interceptor para enviar o token em cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sp:accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiLogin = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000",
});

export default api;