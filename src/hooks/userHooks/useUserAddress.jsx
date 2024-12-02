import { useMutation, useQuery } from "@tanstack/react-query";
import { addAddress, updateAddress, deleteAddress, getAddress } from "../../services/userServices.js/Address";

export const useGetAddress = (payload) => {
  return useQuery({
    queryKey: ["address", payload.uid],
    queryFn: () => {
      if (!payload?.uid) {
        return Promise.reject(new Error("Invalid payload"));
      }
      return getAddress(payload)
    },
    enabled: !!payload?.uid
  });
};

export const useAddAddress = () => {
  return useMutation({
    mutationFn: (payload) => addAddress(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    }
  });
}

export const useUpdateAddress = () => {
  return useMutation({
    mutationFn: (payload) => updateAddress(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    }
  });
}

export const useDeleteAddress = () => {
  return useMutation({
    mutationFn: (payload) => deleteAddress(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
