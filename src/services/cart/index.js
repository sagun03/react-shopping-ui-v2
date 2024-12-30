import { makeApiRequest } from "@/utils/axiosInstance";

export const fetchCartProducts = async (user) => {
  return makeApiRequest("GET", "/cart/byUserId", null, { userId: user.uid.toString() });
};

export const updateCartProducts = async (CartID, cartDetails) => {
  const { userId, Products } = cartDetails;
  return makeApiRequest("PUT", `/cart/${CartID}`, { userId: userId.toString(), Products });
};

export const createCartProducts = async (cartDetails) => {
  const { userId, Products } = cartDetails;
  return makeApiRequest("POST", "/cart", { userId, Products });
};

export const fetchProductById = async (id) => {
  return makeApiRequest("GET", `/products/${id}`);
};

export const deleteCart = async (CartID) => {
  return makeApiRequest("DELETE", `/cart/${CartID}`);
};

export const deleteProductCart = async (CartID, productId, size) => {
  return makeApiRequest("DELETE", `/cart/cartProduct/${CartID}`, { productId, size });
};
