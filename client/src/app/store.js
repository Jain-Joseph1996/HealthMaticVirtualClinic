import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import pbrandReducer from "../features/pbrand/pbrandSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productReducer,
    pCategory: pCategoryReducer,
    pBrand:pbrandReducer
  },
});
