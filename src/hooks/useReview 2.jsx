import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../services/ReviewService";

export const useReviews = (productId) => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: () => fetchReviews(productId),
    config: {
      retry: 3,
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.error("Error fetching reviews:", error);
      }
    }
  });
};
