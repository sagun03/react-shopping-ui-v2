import apiClient from "../api/client";

export const login = async (userData) => {
  const { email, uid, RFtoken, IDtoken, role } = userData;
  try {
    const response = await apiClient.request({
      method: 'POST',
      url: '/user/login',
      data: {
        uid: uid,
        role: role,
        email: email
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${IDtoken}`,
        'RefreshToken': `Bearer ${RFtoken}`
      }
    });
    return response;
  } catch (error) {
    console.error('Error during login request:', error);
    throw error;
  }
};

export const register = async (userData) => {
  const { email, uid, RFtoken, IDtoken, role } = userData;
  try {
    const response = await apiClient.request({
      method: 'POST',
      url: '/user/register',
      data: {
        uid: uid,
        role: role,
        email: email
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${IDtoken}`,
        'RefreshToken': `Bearer ${RFtoken}`
      }
    });
    return response;
  } catch (error) {
    console.error('Error during login request:', error);
    throw error;
  }
};

export const logout = async (uid) => {
  const response = await apiClient.request({
    method: 'POST',
    url: '/user/logout',
    data: {uid}
  });
  return response;
};

// nbxyz4500@gmail.com
// nitin123