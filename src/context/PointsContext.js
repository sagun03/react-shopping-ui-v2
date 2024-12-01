import React, { useContext, createContext, useState, useMemo, useEffect } from "react";
import { useGetPoints, useCreatePoints } from "../hooks/userHooks/usePointsServer";
import { useUserContext } from "./UserContext";
import PropTypes from "prop-types"
const PointsContext = createContext();

const PointsContextProvider = ({ children }) => {
  const { user } = useUserContext();
  const { data } = useGetPoints({
    uid: user?.uid,
    token: user?.accessToken
  });
  // const createPointsMutation = useCreatePoints();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (data) {
      setPoints(data.data.data.points);
    }
  }, [data])

  const pointsToCash = useMemo(() => {
    return points * 0.1;
  }, [points])

  return <PointsContext.Provider value={{
    points,
    setPoints,
    pointsToCash,
    data
  }}>
    { children }
  </PointsContext.Provider>
}

PointsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const usePointsContext = () => useContext(PointsContext);

export {
  PointsContextProvider,
  usePointsContext
}
