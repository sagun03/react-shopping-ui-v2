import axiosInstance from "../../utils/axiosInstance";

export const addAddress = async (payload) => {
  const response = await axiosInstance.request({
    method: "POST",
    url: "/user/address/create",
    data: payload
  })
  return response;
};

export const getAddress = async (uid) => {
  const response = await axiosInstance.request({
    method: "GET",
    url: `/user/address/get/${uid}`
  })
  return response;
};

export const deleteAddress = async (payload) => {
  const response = await axiosInstance.request({
    method: "DELETE",
    url: `/user/address/remove/${payload.uid}?id=${payload.id}`
  })
  return response;
};

export const updateAddress = async (payload) => {
  const response = await axiosInstance.request({
    method: "PUT",
    url: "/user/address/update",
    data: payload
  })
  return response;
}
