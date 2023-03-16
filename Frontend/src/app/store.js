import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/WatchSlice"
export const store = configureStore({
  reducer: {
    watchlistReducer 
  },
});
