// queries for accessing user endpoints
import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "../../services/authServices";
import { useUserContext } from "../../context/UserContext";
import { set } from "zod";

export const useLogin = () => {
  const { setError, setIsNewUser } = useUserContext();
  return useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (data) => {
      setError(null);
      setIsNewUser(data.data.newUser);
    },
    onError: (error) => {
      setError(error.message);
    }
  })
};

export const useRegister = () => {
  const { setError, setIsNewUser } = useUserContext();
  return useMutation({
    mutationFn: (userData) => register(userData),
    onSuccess: (data) => {
      setError(null);
      setIsNewUser(data.data.newUser);
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
