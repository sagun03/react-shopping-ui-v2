// src/api/apiClient.js
import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

export default apiClient

// apiClient.interceptors.request.use(
//   config => {
//     // Add token to headers if available
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

export const makeApiRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await apiClient.request({
      method,
      url,
      headers: {
        "Content-Type": "application/json"
      },
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
