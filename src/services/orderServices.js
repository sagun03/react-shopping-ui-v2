import { makeApiRequest } from "../api/client";

export const fetchOrderProducts = async (user) => {
  return makeApiRequest("GET", "/orders/byUserID", null, { userId: user.uid.toString() });
};

export const fetchOrder = async (orderId) => {
  return makeApiRequest("GET", `/orders/${orderId}`);
};
