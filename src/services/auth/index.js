import axiosInstance from "@/utils/axiosInstance";

export const login = async (userData) => {
  const { email, role } = userData;
  try {
    const response = await axiosInstance.request({
      method: "POST",
      url: "/user/login",
      data: {
        role,
        email
      }
    });
    return response;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const register = async (userData) => {
  const { email, role } = userData;
  try {
    const response = await axiosInstance.request({
      method: "POST",
      url: "/user/register",
      data: {
        role,
        email
      }
    });
    return response;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const logout = async (uid) => {
  const response = await axiosInstance.request({
    method: "POST",
    url: "/user/logout",
    data: { uid }
  });
  return response;
};
