import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Ensure no trailing space here
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // set interval to refresh token
        const refreshInterval = setInterval(() => {
          currentUser.getIdToken(true).catch((error) => {
            console.log("error while refreshing token", error);
          });
        }, 120000)
      }
    }
    );
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
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired // Validate that children is passed and is a valid React node
};
