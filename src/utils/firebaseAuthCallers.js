import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "@/firebase";
import store from "@/store/index";
import { clearUser, setError, setIsNewUser } from "@/store/slices/userSlice";

export const registerUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    store.dispatch(setError(null));
    store.dispatch(setIsNewUser(res?.additionalUserInfo?.isNewUser || false));
  } catch (error) {
    store.dispatch(setError(error.message));
  }
}

export const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    store.dispatch(setError(null));
    store.dispatch(setIsNewUser(res?.additionalUserInfo?.isNewUser || false));
  } catch (error) {
    store.dispatch(setError(error.message));
  }
}

export const googleLoginUser = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    store.dispatch(setError(null));
    store.dispatch(setIsNewUser(res?.additionalUserInfo?.isNewUser || false));
  } catch (error) {
    store.dispatch(setError(error.message));
  }
}

export const phoneLoginUser = async (number, recaptcha) => {
  try {
    const res = await signInWithPhoneNumber(auth, number, recaptcha);
    store.dispatch(setError(null));
    store.dispatch(setIsNewUser(res?.additionalUserInfo?.isNewUser || false));
  } catch (error) {
    store.dispatch(setError(error.message));
  }
}

export const logoutUser = async () => {
  try {
    const res = await signOut(auth);
    store.dispatch(setError(null));
    store.dispatch(clearUser());
  } catch (error) {
    store.dispatch(setError(error.message));
  }
}
