// queries for accessing user endpoints
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserPoints, createPoints, updatePoints } from "../../services/userServices.js/points";

export const useGetPoints = (payload) => {
  return useQuery({
    queryKey: ["user_points", payload?.uid],
    queryFn: () => {
      if (!payload?.uid || !payload?.token) {
        return Promise.reject(new Error("Invalid payload"));
      }
      return getUserPoints(payload);
    },
    enabled: !!payload?.uid && !!payload?.token
  });
};

export const useCreatePoints = () => {
  return useMutation({
    mutationFn: (payload) => createPoints(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    },
    invalidates: ["user_points"]
  });
}

export const useUpdatePoints = (payload) => {
  return useMutation({
    mutationFn: () => updatePoints(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    },
    invalidates: [`${payload.uid}$:user_points`]
  });
}
