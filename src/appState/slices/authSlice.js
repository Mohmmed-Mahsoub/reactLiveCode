import { dynamicAxiosRequest } from "@/helpers/utilities/dynamicAxiosRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogenedIn: false,
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed' | 'end',,
  refreshToken: null,
  accessToken: null,
};

export const userLoginRequest = createAsyncThunk(
  "auth/userLoginRequest",
  async ({ baseUrl, endPoint, body }) => {
    const res = await dynamicAxiosRequest({
      baseUrl,
      endPoint,
      method: "POST",
      body,
    });

    return {
      accessToken: res?.access,
      refreshToken: res?.refresh,
    };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoginRequest.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(userLoginRequest.fulfilled, (state, action) => {
      state.loading =
        action.payload && action.payload?.accessToken ? "succeeded" : "end";
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
      state.isUserLogenedIn = true;
    });
    builder.addCase(userLoginRequest.rejected, (state, action) => {
      state.loading = "failed";
      state.isUserLogenedIn = false;
      state.refreshToken = null;
      state.accessToken = null;
    });
  },
});

export default authSlice.reducer;
