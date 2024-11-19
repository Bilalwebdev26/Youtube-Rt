import { configureStore } from "@reduxjs/toolkit";
import  appSlice  from "./ContextRedux";
export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
