import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      if (currentUser) {
        setUser(currentUser);
        // set interval to refresh token
        var refreshInterval = setInterval(() => {
          currentUser.getIdToken(true).then((idToken) => {
            console.log("idToken", idToken);
            console.log("current user", currentUser);
          }).catch((error) => {
            console.log("error while refreshing token", error);
          });
        }, 60000)
      } else {
        setUser(null);
        // clear interval
        clearInterval(refreshInterval);
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <UserContext.Provider value={{ user, error, setError }}>
        {children}
    </UserContext.Provider>
  )
}
