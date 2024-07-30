// queries for accessing user endpoints
import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "../services/authServices";

export const useLogin = () => {
  return useMutation({
    mutationFn: (userData) => {
      localStorage.setItem("token", userData.IDtoken);
      return login(userData);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    }
  })
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData) => {
      localStorage.setItem("token", userData.IDtoken);
      return register(userData);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    }
  })
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: (uid) => {
      localStorage.removeItem("token");
      return logout(uid);
    },
    onSuccess: () => {
      console.log("Logged out");
    },
    onError: (error) => {
      console.log(error);
    }
  })
}
