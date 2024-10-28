import { useMutation } from "@tanstack/react-query";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { initializePayment } from "../services/paymentService";

export const usePayment = (amount, user, formattedProducts, pointsUsed, addresId) => {
  const { uid: userId, email = "", phoneNumber = "" } = user || {};
  const stripe = useStripe();
  const elements = useElements();
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);
  console.log(process.env, "process.env")
  const {
    mutate: createPaymentIntent, isLoading: isInitializingPayment, isError,
    error
  } = useMutation({
    mutationFn: () => initializePayment({ amount, userId, email, phoneNumber, products: formattedProducts, pointsUsed, addresId }),
    onMutate: () => setIsPaymentInitiated(true),
    onSuccess: async ({ data }) => {
      const { createdOrder, createdPayment: { clientSecret = "" } } = data;
      const orderId = createdOrder[0]?.orderID;
      console.log("Order", data, createdOrder[0], orderId)

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${process.env.REACT_APP_RETURN_URL}/orderconfirmation/${orderId}`
        }
      });
      if (error) {
        console.error("Payment confirmation error:", error);
        setIsPaymentInitiated(false); // Reset initiation status on error
      } else {
        setIsPaymentInitiated(true);
      }
    },
    onError: (error) => {
      console.error("Error creating payment intent:", error);
      setIsPaymentInitiated(false); // Reset initiation status on error
    }
  });

  return {
    createPaymentIntent,
    isInitializingPayment,
    isPaymentInitiated,
    isError,
    error
  };
};
