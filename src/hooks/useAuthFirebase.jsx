import { useMutation } from '@tanstack/react-query';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

import {
  useRegister,
  useLogin,
  useSignOut,
} from "./useAuthServer";

const extractUserData = (user) => ({
  email: user.email ? user.email : (user.phoneNumber ? user.phoneNumber : undefined),
  uid: user.uid,
  RFtoken: user.refreshToken,
  IDtoken: user.accessToken,
  role: "user"
});

export const useSignUp = () => {
  const { mutate: register } = useRegister();
  return useMutation({
    mutationFn: ({email, password}) => createUserWithEmailAndPassword(auth, email, password),
    onSuccess: (data) => {
      // Success actions
      register(extractUserData(data.user));

    },
    onError: (error) => {
      // Error actions
      console.log(error);
    },
  }
  )
}

export const useLoginEP = () => {
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: ({email, password}) => signInWithEmailAndPassword(auth, email, password),
    onSuccess: (data) => {
      // Success actions
      login(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      console.log(error);
    },
  });
};

export const useLoginGoogle = () => {
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: () => signInWithPopup(auth, new GoogleAuthProvider()),
    onSuccess: (data) => {
      // Success actions
      login(extractUserData(data.user));
      return data;
    },
    onError: (error) => {
      // Error actions
      console.log(error);
    },
  });
}

export const useLoginPhone = () => {
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: ({number, recaptcha}) => signInWithPhoneNumber(auth, number, recaptcha),
    onSuccess: (data) => {
      // Success actions
      login(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      console.log(error);
    },
  });
}

export const useLogOut = () => {
  const { mutate: logout } = useSignOut();
  return useMutation(
    {
      mutationFn: () => {
        localStorage.removeItem("token");
        return signOut(auth)},
      onSuccess: (data) => {
        // Success actions
        logout(data.user);
      },
      onError: (error) => {
        // Error actions
        console.log(error);
      },  
    }
  )
}