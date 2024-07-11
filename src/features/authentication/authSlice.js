/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLogin: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLogin = false;
    }
  }
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
