import { useMutation } from '@tanstack/react-query';
import { login, register } from '../services/authServices';


export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
};