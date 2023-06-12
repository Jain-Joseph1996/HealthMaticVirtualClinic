import { base_url, instance, config } from "../../utils/axiosConfig";

const register = async (uerData) => {
  const response = await instance.post(`${base_url}user/register`, uerData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }

    return response.data;
  }
};
const login = async (uerData) => {
  const response = await instance.post(`${base_url}user/login`, uerData);
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
const addToCart = async (cartData) => {
  const response = await instance.post(
    `${base_url}user/cart`,
    cartData,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await instance.get(`${base_url}user/cart`, config);
  if (response.data) {
    console.log("cart-----", response.data);
    return response.data;
  }
};
const removeProductFromCart = async (cartItemId) => {
  const response = await instance.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const updateProductFromCart = async (cartDetail) => {
  const response = await instance.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const createOrder = async (orderDetail) => {
  const response = await instance.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getOrder = async (id) => {
  const response = await instance.get(
    `${base_url}user/getorderdetails/${id}`,
    config
  );

  return response.data;
};
const emptyCartItems = async () => {
  const response = await instance.delete(`${base_url}user/empty-cart`, config);
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
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  emptyCartItems,
  getOrder,
  forgotPasswordToken,
  UpdatePassword,
};
