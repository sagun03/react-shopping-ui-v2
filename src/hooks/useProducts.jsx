import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../services/productServices";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    config: {
      retry: 3, // Retry failed requests up to 3 times
      refetchOnWindowFocus: false, // Disable refetch on window focus
      onError: (error) => {
        console.error("Error fetching products:", error);
      }
    }
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    config: {
      enabled: !!id, // Ensures query is only enabled when id is truthy
      retry: 3, // Retry failed requests up to 3 times
      onError: (error) => {
        console.error("Error fetching product:", error);
      },
      staleTime: 60000 // Cache data for 1 minute (in milliseconds)
    }
  });
};
