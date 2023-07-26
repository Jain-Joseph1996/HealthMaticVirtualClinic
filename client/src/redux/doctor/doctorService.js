import { base_url, instance, config } from "../../utils/axiosConfig";

const applydoctor = async (userData) => {
  const response = await instance.post(`${base_url}user/apply-doctor-account`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("doctor", JSON.stringify(response.data));
    }

    return response.data;
  }
};

const getApprovedDoctors = async (userData) => {
  console.log("here 1")
  const response = await instance.get(`${base_url}user/get-all-approved-doctors`,userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("doctor", JSON.stringify(response.data));
    }

    return response.data;
  }
};

const addNotes = async (userData) => {
  const response = await instance.post(`${base_url}doctor/add-notes`, userData);
  if (response.data) {
    return response.data;
  }
};


export const doctorService = {
  applydoctor,
  getApprovedDoctors,
  addNotes
};