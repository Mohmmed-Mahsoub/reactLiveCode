import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    home: homeSlice,
    auth: userSlice,
  },
});

export default store;
