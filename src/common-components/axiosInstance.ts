import axios from "axios";
// import { getToken, clearToken } from "../utils/storage";

const axiosInstance = axios.create({
  //   baseURL: "base_url",
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = "getToken()";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      //   clearToken();
      //   window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
