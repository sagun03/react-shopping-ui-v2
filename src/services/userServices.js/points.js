import apiClient from "../../api/client";

export const getUserPoints = async (payload) => {
  const { token, uid } = payload;
  const response = await apiClient.request({
    method: "GET",
    url: `/user/points/get/${uid}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
};

export const createPoints = async (payload) => {
  const { token, ...pointsData } = payload;
  const response = await apiClient.request({
    method: "POST",
    url: "/user/points/create",
    data: pointsData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
}

export const updatePoints = async (payload) => {
  const { token, uid, points } = payload;
  const response = await apiClient.request({
    method: "PUT",
    url: `/user/points/update/${uid}?points=${points}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
}
