import apiClient from "../api/client";

export const fetchCartProducts = async (user) => {
  try {
    const response = await apiClient.request({
      method: "GET",
      url: "/cart/byUserId",
      params: {
        userId: user.uid.toString() // Send userId in request body
      }
    });
    console.log(response, "reee")
    return response.data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const updateCartProducts = async (CartID, cartDetails) => {
  console.log(cartDetails, "cartDetails");
  const { userId, Products } = cartDetails;
  console.log(userId, "userId");

  try {
    const response = await apiClient.request({
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      url: `/cart/${CartID}`,
      data: {
        userId: userId.toString(),
        Products: Products
      }
    });

    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error during update cart request:", error);
    throw error;
  }
};

export const createCartProducts = async (cartDetails) => {
  console.log(cartDetails, "cartDetails");
  const { userId, Products } = cartDetails;
  console.log(userId, "userId");

  try {
    const response = await apiClient.request({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      url: "/cart",
      data: {
        userId: userId.toString(),
        Products: Products
      }
    });

    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error during update cart request:", error);
    throw error;
  }
};

// createCartProducts

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const deleteCart = async (CartID) => {
  try {
    const response = await apiClient.request({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      url: `/cart/${CartID}`
    });

    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error during deleting cart request:", error);
    throw error;
  }
};

export const deleteProductCart = async (CartID, productId) => {
  console.log(productId, "productID")
  try {
    const response = await apiClient.request({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      url: `/cart/cartProduct/${CartID}`,
      data: {
        productId: productId
      }
    });

    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error during deleting cart request:", error);
    throw error;
  }
};
