import { base_url, instance, config } from "../../utils/axiosConfig";

const getuserbyID = async (userData) => {
  const response = await instance.post(`${base_url}user/get-user-info-by-id`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data.data));
    }
    return response.data.data;
    }
};

const register = async (userData) => {
  const response = await instance.post(`${base_url}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }

    return response.data;
  }
};

const login = async (userData) => {
  const response = await instance.post(`${base_url}user/login`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const logout = async (userData) => {
  const response = await instance.get(`${base_url}user/logout`, userData);
  if (response.data) {
    return response.data;
  }
};
const forgotPasswordToken = async (email) => {
  const response = await instance.post(
    `${base_url}user/forgot-password-token`,
    email
  );
  if (response.data) {
    localStorage.setItem("userId", response.data.userId);
    return response.data;
  }
};
const UpdatePassword = async (details) => {
  const response = await instance.put(`${base_url}user/password`, details);
  if (response.data) {
    return response.data;
  }
};


export const authService = {
  register,
  login,
  logout,
  forgotPasswordToken,
  UpdatePassword,
  getuserbyID
};