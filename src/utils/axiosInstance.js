import axios from "axios";
import store from "@/store/index";

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

// Utility function to handle API requests
export const makeApiRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      params
    });
    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error(`Error during ${method} request to ${url}:`, error);
    throw error;
  }
};

export const axiosInstanceKeyless = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
