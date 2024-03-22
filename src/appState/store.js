import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Specify which part of store you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
