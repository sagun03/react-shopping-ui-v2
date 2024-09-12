// queries for accessing user endpoints
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserPoints, createPoints, updatePoints } from "../../services/userServices.js/points";

export const useGetPoints = (payload) => {
  return useQuery({
    queryKey: `${payload.uid}$:user_points`,
    queryFn: () => getUserPoints(payload)
  })
};

export const useCreatePoints = () => {
  return useMutation({
    mutationFn: (payload) => createPoints(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    }
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
    }
  });
}
