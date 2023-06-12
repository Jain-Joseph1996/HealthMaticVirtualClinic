import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};

const updateProduct = async (product) => {
  const response = await axios.put(
    `${base_url}product/${product.id}`,
    // { title: brand.brandData.title },
    config
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await axios.get(`${base_url}brand/${id}`, config);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${base_url}brand/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;
