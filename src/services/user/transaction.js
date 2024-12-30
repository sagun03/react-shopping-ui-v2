import axiosInstance from "@/utils/axiosInstance";

// add new log
export const addLog = async (payload) => {
  const response = await axiosInstance.request({
    method: "POST",
    url: "/transaction/log",
    data: payload
  })
  return response;
}

// get all logs
export const getLogs = async (uid) => {
  const response = await axiosInstance.request({
    method: "GET",
    url: `/transaction/get/${uid}`
  })
  return response;
}
