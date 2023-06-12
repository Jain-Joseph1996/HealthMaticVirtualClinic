import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import pbrandService from "./pbrandService";

export const getBrand = createAsyncThunk(
  "productBrand/get-brand",
  async (thunkAPI) => {
    try {
      return await pbrandService.getProductbrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("RevertAll");

const initialState = {
  pbrand: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const pbrandSlice = createSlice({
  name: "pbrand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.pbrands = action.payload;
      })
      .addCase(getBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default pbrandSlice.reducer;
