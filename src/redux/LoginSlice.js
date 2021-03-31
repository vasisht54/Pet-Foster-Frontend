import {createSlice} from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const {login, logout} = LoginSlice.actions;
export default LoginSlice.reducer;
