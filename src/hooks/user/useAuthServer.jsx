// queries for accessing user endpoints
import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "@/services/auth/index";
import { useDispatch } from "react-redux";
import { setError, setIsNewUser } from "@/store/slices/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (data) => {
      dispatch(setError(null));
      dispatch(setIsNewUser(data.data.newUser));
    },
    onError: (error) => {
      dispatch(setError(error.message));
    }
  })
};

export const useRegister = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (userData) => register(userData),
    onSuccess: (data) => {
      dispatch(setError(null));
      dispatch(setIsNewUser(data.data.newUser));
    },
    onError: (error) => {
      dispatch(setError(error.message));
    }
  })
};

export const useSignOut = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (uid) => logout(uid),
    onSuccess: () => {
      dispatch(setError(null));
    },
    onError: (error) => {
      dispatch(setError(error.message));
    }
  })
}
