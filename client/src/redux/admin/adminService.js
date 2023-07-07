import { base_url, instance, config } from "../../utils/axiosConfig";

const getDoctor = async (userData) => {
  const response = await instance.get(`${base_url}admin/get-all-doctors`, userData, config);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("doctor", JSON.stringify(response.data));
    }

    return response.data;
  }
};

const getUsers = async (userData) => {
    const response = await instance.get(`${base_url}admin/get-all-users`, userData, config);
    if (response.data) {
      if (response.data) {
        localStorage.setItem("doctor", JSON.stringify(response.data));
      }
  
      return response.data;
    }
  };

  const changeDoctorStatus = async (userData) => {
    const response = await instance.post(`${base_url}admin/change-doctor-account-status`, userData);
    if (response.data) {
      if (response.data) {
        localStorage.setItem("doctor", JSON.stringify(response.data));
      }
  
      return response.data;
    }
  };


export const adminService = {
    getDoctor,
    getUsers,
    changeDoctorStatus
};