import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/user/userSlice";
import adminReducer from "../redux/admin/adminSlice";
import notificationReducer from "../redux/notification/notificationSlice"
import doctorReducer from "../redux/doctor/doctorSlice"


export const store = configureStore({
  reducer: {
    user: authReducer,
    admin: adminReducer,
    notifications: notificationReducer,
    doctor:doctorReducer
  },
});
