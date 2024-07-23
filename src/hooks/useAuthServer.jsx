// queries for accessing user endpoints
import { useMutation } from '@tanstack/react-query';
import { login, register, logout } from '../services/authServices';
import { useContext } from 'react';



export const useLogin = () => {
    return useMutation({
    mutationFn: (userData) => login(userData),
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem('token', data.data.accessToken);
    },
    onError: (error) => {
      console.log(error);
    },
  })
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData) => register(userData),
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.accessToken);
    },
    onError: (error) => {
      console.log(error);
    },
  })
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: (uid) => logout(uid),
    onSuccess: () => {
      console.log("inside logout, auth server ");
    },
    onError: (error) => {
      console.log(error);
    },
  })
}