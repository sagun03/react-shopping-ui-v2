/* eslint-disable quotes */
import axiosInstance from '@/utils/axiosInstance';

// Fetch reviews for a specific product
export const fetchReviews = async (productId) => {
  try {
    const response = await axiosInstance.get(`/reviews/product/${productId}`);
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch reviews', error);
    throw error;
  }
};

// Submit a new review by productId
export const submitReview = async (productId, reviewData) => {
  try {
    const response = await axiosInstance.post(`/reviews/product/${productId}`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Failed to submit review', error);
    throw error;
  }
};
