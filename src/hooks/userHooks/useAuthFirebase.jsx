import { useMutation } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../../firebase";

import {
  useRegister,
  useLogin,
  useSignOut
} from "./useAuthServer";

// import { useUserContext } from "../../context/UserContext";
import { useDispatch } from "react-redux";
import { setError } from "../../redux/port/userSlice";

const extractUserData = (user) => ({
  email: user.email ? user.email : (user.phoneNumber ? user.phoneNumber : undefined),
  IDtoken: user.accessToken,
  role: "user"
});

export const useSignUp = () => {
  const dispatch = useDispatch();
  // const { setError } = useUserContext();
  const { mutate: register } = useRegister();
  return useMutation({
    mutationFn: ({ email, password }) => createUserWithEmailAndPassword(auth, email, password),
    onSuccess: (data) => {
      // Success actions
      dispatch(setError(null));
      register(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      dispatch(setError(error.message));
    }
  })
}

export const useLoginEP = () => {
  // const { setError } = useUserContext();
  const dispatch = useDispatch();
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
    onSuccess: (data) => {
      // Success actions
      dispatch(setError(null));
      login(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      dispatch(setError(error.message));
    }
  });
};

export const useLoginGoogle = () => {
  // const { setError } = useUserContext();
  const dispatch = useDispatch();
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: () => signInWithPopup(auth, new GoogleAuthProvider()),
    onSuccess: (data) => {
      // Success actions
      dispatch(setError(null));
      login(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      dispatch(setError(error.message));
    }
  });
}

export const useLoginPhone = () => {
  const dispatch = useDispatch();
  const { mutate: login } = useLogin();
  return useMutation({
    mutationFn: ({ number, recaptcha }) => signInWithPhoneNumber(auth, number, recaptcha),
    onSuccess: (data) => {
      // Success actions
      dispatch(setError(null));
      login(extractUserData(data.user));
    },
    onError: (error) => {
      // Error actions
      dispatch(setError(error.message));
    }
  });
}

export const useLogOut = () => {
  const { mutate: logout } = useSignOut();
  // const { setError } = useUserContext();
  const dispatch = useDispatch();
  return useMutation(
    {
      mutationFn: () => signOut(auth),
      onSuccess: (data) => {
        // Success actions
        dispatch(setError(null));
        logout(data.user);
      },
      onError: (error) => {
        // Error actions
        dispatch(setError(error.message));
      }
    }
  )
}
