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

export const fetchCartProducts = async (user) => {
  return makeApiRequest("GET", "/cart/byUserId", null, { userId: user.uid.toString() });
};

export const updateCartProducts = async (CartID, cartDetails) => {
  const { userId, Products } = cartDetails;
  return makeApiRequest("PUT", `/cart/${CartID}`, { userId: userId.toString(), Products });
};

export const createCartProducts = async (cartDetails) => {
  const { userId, Products } = cartDetails;
  return makeApiRequest("POST", "/cart", { userId: userId.toString(), Products });
};

export const fetchProductById = async (id) => {
  return makeApiRequest("GET", `/products/${id}`);
};

export const deleteCart = async (CartID) => {
  return makeApiRequest("DELETE", `/cart/${CartID}`);
};

export const deleteProductCart = async (CartID, productId) => {
  return makeApiRequest("DELETE", `/cart/cartProduct/${CartID}`, { productId });
};
