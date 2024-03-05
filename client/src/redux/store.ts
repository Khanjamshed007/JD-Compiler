import { configureStore } from "@reduxjs/toolkit";
import ComplierSlice from "./slices/ComplierSlice";

export const store = configureStore({
  reducer: {
    ComplierSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
