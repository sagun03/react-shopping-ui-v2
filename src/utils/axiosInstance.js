import axios from "axios";
import store from "../redux/store";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.currentUser.stsTokenManager.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
