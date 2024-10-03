import { useMutation, useQuery } from "@tanstack/react-query";
import { addLog, getLogs } from "../services/transactionServices";

export const useGetLog = (uid) => {
  return useQuery({
    queryKey: ["logs", uid],
    queryFn: () => getLogs(uid)
  });
}

export const useAddLog = () => {
  return useMutation({
    mutationFn: (payload) => addLog(payload),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (err) => {
      console.log(err);
    },
    invalidates: ["logs"]
  })
}
