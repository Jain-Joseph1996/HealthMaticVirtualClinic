import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/user/userSlice";
import adminReducer from "../redux/admin/adminSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer
  },
});
