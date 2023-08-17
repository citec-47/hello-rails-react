import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "/api/v1/greetings";

export const fetchGreeting = createAsyncThunk("greeting", async () => {
  const res = await axios.get(API_URL);
  return res.data.text;
});

const initialState = {
  greeting: "",
  isLoading: false,
  error: null,
};

export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.greeting = payload;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;
export const showGreeting = (state) => state.greeting.greeting;
