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


export const doctorService = {
  applydoctor,
};