import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Ensure no trailing space here
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useAddLog } from "../hooks/useTransaction";
import { useCreatePoints } from "../hooks/userHooks/usePointsServer";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const { mutate: addLog } = useAddLog();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);

  const { mutate: createPoints } = useCreatePoints();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // set interval to refresh token
      }
    }
    );
    return () => {
      unsubscribe();
    }
  }, [])

  useEffect(() => {
    if (isNewUser) {
      // create points
      createPoints({
        token: user.accessToken,
        uid: user.uid,
        type: "new user login",
        points: 500,
        role: "user"
      });
      // add log
      addLog({
        uid: user.uid,
        date: new Date().toLocaleDateString("en-US"),
        points: 500,
        type: "SIGNUP"
      });
    }
    return () => {
      setIsNewUser(false);
    }
  }, [isNewUser])

  return (
    <UserContext.Provider value={{ user, error, setError, setIsNewUser }}>
        {children}
    </UserContext.Provider>
  )
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired // Validate that children is passed and is a valid React node
};
