import { useQuery } from "@tanstack/react-query";
import { fetchOrderProducts } from "../services/orderServices";
export const useOrder = (user) => {
  console.log("asnasjaj", user)
  const fetchOrderData = async () => {
    return fetchOrderProducts(user); // Fetch cart data based on user
  };
  return useQuery({
    queryKey: ["order", user?.uid],
    queryFn: fetchOrderData,
    retry: 3, // Retry failed requests up to 3 times
    refetchOnWindowFocus: false, // Disable refetch on window focus
    onError: (error) => {
      console.error("Error fetching products:", error);
    },
    enabled: !!user // Only run query if user is available
  });
}
