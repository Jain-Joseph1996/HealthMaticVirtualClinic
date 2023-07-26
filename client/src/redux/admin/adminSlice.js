import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminService } from "./adminService";
import { toast } from "react-toastify";

export const getDoctor = createAsyncThunk(
  "admin/get-all-doctors",
  async (userData, thunkAPI) => {
    try {
      return await adminService.getDoctor(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk(
    "admin/get-all-users",
    async (userData, thunkAPI) => {
      try {
        return await adminService.getUsers(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const changeDoctorStatus = createAsyncThunk(
    "admin/change-doctor-account-status",
    async (userData, thunkAPI) => {
      try {
        return await adminService.changeDoctorStatus(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const changeUserStatus = createAsyncThunk(
    "admin/change-user-account-status",
    async (userData, thunkAPI) => {
      try {
        return await adminService.changeUserStatus(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const addAnnouncement = createAsyncThunk(
    "admin/add-news",
    async (userData, thunkAPI) => {
      try {
        return await adminService.addAnnouncement(userData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  
const getDoctorfromLocalStorage = localStorage.getItem("doctor")
  ? JSON.parse(localStorage.getItem("doctor"))
  : null;

  const adminState = {
    doctors: [],
    users: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
export const adminSlice = createSlice({
  name: "admin",
  initialState: adminState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.doctors = action.payload;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(changeDoctorStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeDoctorStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.status = action.payload;
      })
      .addCase(changeDoctorStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });

    },
  });
  
  export default adminSlice.reducer;
  