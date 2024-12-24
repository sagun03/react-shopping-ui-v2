// queries for accessing user endpoints
import { useMutation } from "@tanstack/react-query";
import { login, register, logout } from "../../services/authServices";
import { useUserContext } from "../../context/UserContext";
import { useDispatch } from "react-redux";
import { setError, setIsNewUser } from "../../redux/port/userSlice";

export const useLogin = () => {
  // const { setError, setIsNewUser } = useUserContext();
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
  // const { setError, setIsNewUser } = useUserContext();
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
  // const { setError } = useUserContext();
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
