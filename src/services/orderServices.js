import apiClient from "../api/client";

// Utility function to handle API requests
const makeApiRequest = async (method, url, data = null, params = null) => {
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

export const fetchOrderProducts = async (user) => {
  return makeApiRequest("GET", "/orders/byUserID", null, { userId: user.uid.toString() });
};
