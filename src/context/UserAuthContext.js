import { createContext, useContext, useEffect, useState } from "react";
import { RecaptchaVerifier, onAuthStateChanged } from "firebase/auth";
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
  const [user, setUser] = useState("");
  const { mutate: createUser  } = useSignUp();
  const { mutate: loginEP } = useLoginEP();
  const { mutate: signOut } = useLogOut();
  const { mutate: googleLogin } = useLoginGoogle();
  const { mutate: loginPhone } = useLoginPhone();

  const signUp = (email, password) =>{
    createUser({ email, password });
  }

  const login = (email, password) => {
    loginEP({email, password});
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // check if token is present in local storage
      if(localStorage.getItem('token') && localStorage.getItem('token') !== "undefined") {
        // if token is present then set the user
        setUser(currentUser);
        console.log(currentUser);
      } else {
        // if token is not present then set the user to null
        setUser(null)
      }
    });
    return () => {
      unsubscribe();
    };
  });


  return (
    <userAuthContext.Provider
      value={{
        signUp,
        login,
        logOut,
        googleSignIn,
        setUpRecaptcha,
        user,
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
