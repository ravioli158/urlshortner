import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isloading: false,
  urls: [],
  error: null,
};
// API base Url
const apiUrl = "https://t.ly/api/v1/link/shorten";
const token = process.env.REACT_APP_APIKEY;

export const shortenUrl = createAsyncThunk(
  "urls/shortenUrl",
  async (url, { rejectWithValue }) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      };
      const data = {
        long_url: url,
      };
      const response = await axios.post(apiUrl, data, { headers });
      if (response.status === 200) return response.data;
      else {
        console.log("error", response.data.error);
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      console.log("error", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const urlSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(shortenUrl.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(shortenUrl.fulfilled, (state, action) => {
        state.isloading = false;

        state.urls.unshift(action.payload); // Add the value to the beginning of the array

        // If the array size exceeds maxSize, remove the last element
        if (state.urls.length > 3) {
          state.urls.pop();
        }
      })
      .addCase(shortenUrl.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});
export const { clearError } = urlSlice.actions;
export default urlSlice.reducer;
