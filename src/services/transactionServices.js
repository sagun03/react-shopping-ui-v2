import apiClient from "../api/client";

// add new log
export const addLog = async (payload) => {
  const response = await apiClient.request({
    method: "POST",
    url: "/transaction/log",
    data: payload
  })
  return response;
}

// get all logs
export const getLogs = async (uid) => {
  const response = await apiClient.request({
    method: "GET",
    url: `/transaction/get/${uid}`
  })
  return response;
}
