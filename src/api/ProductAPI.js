/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import axios from 'axios';

// Base URL for the API (adjust to your backend URL)
const API_BASE_URL = 'http://localhost:4000/jk'; // Replace with your actual base URL

// Create an instance of axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch similar products
export const fetchSimilarProducts = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}/similar`); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Failed to fetch similar products', error);
    throw error;
  }
};
