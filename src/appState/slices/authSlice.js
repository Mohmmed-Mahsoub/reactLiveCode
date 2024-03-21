import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogenedIn: false,
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed' | 'end',,
  refreshToken: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
