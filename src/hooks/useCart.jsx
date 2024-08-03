import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCartProducts, updateCartProducts, createCartProducts, deleteCart, deleteProductCart } from "../services/cartService";
export const useCart = (user) => {
  const fetchCartData = async () => {
    return fetchCartProducts(user); // Fetch cart data based on user
  };

  return useQuery({
    queryKey: ["cart", user?.uid],
    queryFn: fetchCartData,
    retry: 3, // Retry failed requests up to 3 times
    refetchOnWindowFocus: false, // Disable refetch on window focus
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
    enabled: !!user // Only run query if user is available
  });
};
export const useUpdateCart = () => {
  return useMutation({
    mutationFn: async ({ CartID, cartDetails }) => {
      if (!CartID) {
        throw new Error("CartID is required");
      }
      return updateCartProducts(CartID, cartDetails);
    },
    onError: (error) => {
      console.error("Error updating cart:", error);
    },
    onSuccess: () => {
      console.log("Cart updated successfully");
      window.location.reload();
    }
  });
};

export const useCreateCart = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async ({ cartDetails, onSuccess }) => {
      console.log(onSuccess, "onSuccess")
      return createCartProducts(cartDetails);
    },
    onError: (error) => {
      console.error("Error creating cart:", error);
    },
    onSuccess: (_, { onSuccessCallback }) => {
      console.log("Cart created successfully");
      if (onSuccessCallback) {
        onSuccessCallback();
      }
      // window.location.reload();
    }
  });
}
export const useDeleteCart = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async ({ CartID }) => {
      return deleteCart(CartID);
    },
    onError: (error) => {
      console.error("Error deleting cart:", error);
    },
    onSuccess: (_, { onSuccessCallback }) => {
      console.log("Cart Deleted successfully");
      // if (onSuccessCallback) {
      //   onSuccessCallback();
      // }
      window.location.reload();
    }
  });
}
export const useDeleteProuctCart = (onSuccessCallback) => {
  return useMutation({
    mutationFn: async ({ CartID, productId }) => {
      return deleteProductCart(CartID, productId);
    },
    onError: (error) => {
      console.error("Error deleting cart:", error);
    },
    onSuccess: (_, { onSuccessCallback }) => {
      console.log("Cart Deleted successfully");
      // if (onSuccessCallback) {
      //   onSuccessCallback();
      // }
      window.location.reload();
    }
  });
}
