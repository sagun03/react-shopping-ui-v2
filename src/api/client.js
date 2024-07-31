// src/api/apiClient.js
import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

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

export default apiClient
