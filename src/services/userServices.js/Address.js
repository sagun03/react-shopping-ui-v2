import apiClient from "../../api/client";

export const addAddress = async (payload) => {
  const { token, ...addressData } = payload;
  const response = await apiClient.request({
    method: "POST",
    url: "/user/address/create",
    data: addressData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
};

export const getAddress = async (payload) => {
  const { token, uid } = payload;
  const response = await apiClient.request({
    method: "GET",
    url: `/user/address/get/${uid}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
};

export const deleteAddress = async (payload) => {
  const { token, uid } = payload;
  const response = await apiClient.request({
    method: "DELETE",
    url: `/user/address/delete/${uid}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
};

export const updateAddress = async (payload) => {
  const { token, ...addressData } = payload;
  const response = await apiClient.request({
    method: "PUT",
    url: "/user/address/update",
    data: addressData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  return response;
}
