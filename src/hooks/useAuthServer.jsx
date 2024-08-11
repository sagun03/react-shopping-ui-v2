// queries for accessing user endpoints
import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "../services/authServices";
import { useUserContext } from "../context/UserContext";

export const useLogin = () => {
  const { setError } = useUserContext();
  return useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (data) => {
      setError(null);
      console.log(data);
    },
    onError: (error) => {
      setError(error.message);
    }
  })
};

export const useRegister = () => {
  const { setError } = useUserContext();
  return useMutation({
    mutationFn: (userData) => register(userData),
    onSuccess: (data) => {
      setError(null);
      console.log(data);
    },
    onError: (error) => {
      setError(error.message);
      console.log(error);
    }
  })
};

export const useSignOut = () => {
  const { setError } = useUserContext();
  return useMutation({
    mutationFn: (uid) => logout(uid),
    onSuccess: () => {
      setError(null);
      console.log("Logged out");
    },
    onError: (error) => {
      setError(error.message);
      console.log(error);
    }
  })
}
