import { createContext, useContext } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import {
  useLogOut,
  useLoginGoogle,
  useLoginPhone,
  useLoginEP,
  useSignUp
} from "../hooks/useAuthFirebase";
import { auth } from "../firebase";
const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const { mutate: createUser } = useSignUp();
  const { mutate: loginEP } = useLoginEP();
  const { mutate: signOut } = useLogOut();
  const { mutate: googleLogin } = useLoginGoogle();
  const { mutate: loginPhone } = useLoginPhone();

  const signUp = (email, password) => {
    createUser({ email, password });
  }

  const login = (email, password) => {
    loginEP({ email, password });
  }

  const logOut = () => {
    console.log("inside logout");
    signOut();
  };

  const googleSignIn = () => {
    googleLogin();
  };

  const setUpRecaptcha = (number) => {
    const recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptcha.render();
    return loginPhone(number, recaptcha);
  };

  return (
    <userAuthContext.Provider
      value={{
        signUp,
        login,
        logOut,
        googleSignIn,
        setUpRecaptcha,
        signOut,
        auth
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
