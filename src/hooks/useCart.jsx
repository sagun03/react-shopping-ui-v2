import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
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
    onSuccess: (_, { userID }) => {
      console.log("Cart updated successfully");
      queryClient.invalidateQueries(["cart"], userID);
    }
  });
};

export const useCreateCart = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ cartDetails }) => {
      console.log(cartDetails, "cartDetails")
      return createCartProducts(cartDetails);
    },
    onError: (error) => {
      console.error("Error creating cart:", error);
    },
    onSuccess: (_, { userID, setOpenAlert }) => {
      console.log("Cart created successfully");
      setOpenAlert(true)
      queryClient.invalidateQueries(["cart"], userID);
    }
  });
}
export const useDeleteCart = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ CartID }) => {
      return deleteCart(CartID);
    },
    onError: (error) => {
      console.error("Error deleting cart:", error);
    },
    onSuccess: (_, { userID }) => {
      console.log("Cart Deleted successfully");
      queryClient.invalidateQueries(["cart"], userID);
    }
  });
}
export const useDeleteProuctCart = (onSuccessCallback) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ CartID, productId }) => {
      return deleteProductCart(CartID, productId);
    },
    onError: (error) => {
      console.error("Error deleting cart:", error);
    },
    onSuccess: (_, { userID }) => {
      console.log("Cart Deleted successfully");
      queryClient.invalidateQueries(["cart"], userID);
    }
  });
}
