import axiosInstance from "@/utils/axiosInstance";

export const getUserPoints = async (payload) => {
  const { uid } = payload;

  const response = await axiosInstance.request({
    method: "GET",
    url: `/user/points/get/${uid}`
  })
  return response;
};

export const createPoints = async (payload) => {
  const { token, ...pointsData } = payload;
  const response = await axiosInstance.request({
    method: "POST",
    url: "/user/points/create",
    data: pointsData
  })
  return response;
}

export const updatePoints = async (payload) => {
  const { uid, points } = payload;
  const response = await axiosInstance.request({
    method: "PUT",
    url: `/user/points/update/${uid}?points=${points}`
  })
  return response;
}
