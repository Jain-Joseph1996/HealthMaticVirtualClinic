import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doctorService } from "./doctorService";
import { toast } from "react-toastify";

export const applyDoctor = createAsyncThunk(
  "auth/apply-doctor-account",
  async (userData, thunkAPI) => {
    try {
      return await doctorService.applydoctor(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const getDoctorfromLocalStorage = localStorage.getItem("doctor")
  ? JSON.parse(localStorage.getItem("doctor"))
  : null;

const initialState = {
  doctor: getDoctorfromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  createdDoctor: {},
};
export const doctorSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdDoctor = action.payload;
        if (state.isSuccess) {
          localStorage.setItem("doctor", JSON.stringify(action.payload));
          toast.success("Doctor Created Successfully ");
        }
      })
      .addCase(applyDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.success("something went wrong");
        }
      });;
    },
  });
  
  export default doctorSlice.reducer;
  