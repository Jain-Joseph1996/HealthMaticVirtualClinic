import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { notificationService } from "./notificationService";
import { toast } from "react-toastify";


export const markNotificationsAsSeen = createAsyncThunk(
  "notification/mark-all-notifications-as-seen",
  async (details, thunkAPI) => {
    try {
      return await notificationService.markNotificationsSeen(details);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");


export const deleteNotifications = createAsyncThunk(
  "notification/delete-all-notifications",
  async (details, thunkAPI) => {
    try {
      return await notificationService.deleteNotifications(details);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  notifications: [],
  isError: false,
  isSeenSuccess: false,
  isDeleteSuccess: false,
  isLoading: false,
  message: "",
};
export const notificationSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(markNotificationsAsSeen.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markNotificationsAsSeen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSeenSuccess = true;
        state.markedNotifications = action.payload;
        if (state.isSeenSuccess) {
          toast.success("Notifications marked as read Successfully ");
        }
      })
      .addCase(markNotificationsAsSeen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSeenSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error("something went wrong");
        }
      })
      .addCase(deleteNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isDeleteSuccess = true;
        state.deletedNotifications = action.payload;
        if (state.isDeleteSuccess) {
          toast.success("Notifications deleted Successfully ");
        }
      })
      .addCase(deleteNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isDeleteSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.success("something went wrong");
        }
      })
      .addCase(resetState, () => initialState);
    },
  });
  
  export default notificationSlice.reducer;
  