import { configureStore } from "@reduxjs/toolkit";
import FostererSlice from "./FostererSlice";
import LoginReducer from "./LoginSlice";

export default configureStore({
  reducer: {
    isLoggedIn: LoginReducer,
    fosterers: FostererSlice,
  },
});
