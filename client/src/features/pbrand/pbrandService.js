import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProductbrands = async () => {
  const response = await axios.get(`${base_url}brand/`);

  return response.data;
};

const pbrandService = {
  getProductbrands,
};

export default pbrandService;
