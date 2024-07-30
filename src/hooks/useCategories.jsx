import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/categoryServices";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    config: {
      retry: 3, // Retry failed requests up to 3 times
      refetchOnWindowFocus: false, // Disable refetch on window focus
      onError: (error) => {
        console.error("Error fetching category:", error);
      }
    }
  });
};
