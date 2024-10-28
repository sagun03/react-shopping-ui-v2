import { makeApiRequest } from "../api/client";

export const initializePayment = async ({
  amount,
  userId,
  email,
  phoneNumber,
  products,
  pointsUsed,
  addresId
}) => {
  return makeApiRequest("POST", "/payment/createPayment", {
    amount,
    userId,
    email,
    phoneNumber,
    products,
    pointsUsed,
    addresId
  });
};
