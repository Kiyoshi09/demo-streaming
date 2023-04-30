import { configureStore } from "@reduxjs/toolkit";
import userprofileReducer from "../userprofileSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { streamingApi } from "./api/streamingApi";

export const store = configureStore({
  reducer: {
    userprofile: userprofileReducer,
    [streamingApi.reducerPath]: streamingApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(streamingApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useGetConfigurationQuery } from './api/streamingApi';