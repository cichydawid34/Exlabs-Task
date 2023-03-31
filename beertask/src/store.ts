import { configureStore } from "@reduxjs/toolkit";
import { beersApi } from "./redux/beersSlice";
export const store = configureStore({
  reducer: {
    [beersApi.reducerPath]: beersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beersApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
