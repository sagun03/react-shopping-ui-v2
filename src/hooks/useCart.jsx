import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCartProducts, updateCartProducts, createCartProducts, deleteCart, deleteProductCart } from "../services/cartService";
import { useCartContext } from "../context/cartContext";

let isUpdate = false;
// Fetch Cart Data Hook
export const useCart = (user, shouldFetchCart) => {
  const { isCartData } = useCartContext();
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
    enabled: !!user && (!isCartData || isUpdate)
  });
};

// Update Cart Hook
export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ CartID, cartDetails }) => {
      if (!CartID) {
        throw new Error("CartID is required");
      }
      isUpdate = true;
      return updateCartProducts(CartID, cartDetails);
    },
    onError: (error) => {
      console.error("Error updating cart:", error);
    },
    onSuccess: (_, { userID }) => {
      console.log("Cart updated successfully", userID);
      isUpdate = false
      // Ensure `shouldFetchCart` is set to `true` when invalidating the query
      queryClient.invalidateQueries({
        queryKey: ["cart", userID] // Always pass the correct query key
      });
    }
  });
};

// Create Cart Hook
export const useCreateCart = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cartDetails }) => {
      return createCartProducts(cartDetails);
    },
    onError: (error) => {
      console.error("Error creating cart:", error);
    },
    onSuccess: (_, { userID, setOpenAlert }) => {
      console.log("Cart created successfully");
      setOpenAlert(true);
      // Ensure the query is invalidated and refetched
      queryClient.invalidateQueries({
        queryKey: ["cart", userID] // Invalidate with `shouldFetchCartUpdate` as true
      });
    }
  });
};

// Delete Cart Hook
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
      console.log("Cart deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["cart", userID] // Force refetch with `shouldFetchCartUpdate` set to true
      });
    }
  });
};

// Delete Product from Cart Hook
export const useDeleteProductCart = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ CartID, productId, size }) => {
      return deleteProductCart(CartID, productId, size);
    },
    onError: (error) => {
      console.error("Error deleting product from cart:", error);
    },
    onSuccess: (_, { userID }) => {
      console.log("Product deleted from cart successfully");

      queryClient.invalidateQueries({
        queryKey: ["cart", userID] // Ensure the correct query key for refetch
      });
    }
  });
};
