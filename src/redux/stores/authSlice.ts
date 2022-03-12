import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './../actions/types';
import { createSlice } from '@reduxjs/toolkit';
import { IAuthUser } from '../../types/user';

const user: IAuthUser = JSON.parse(localStorage.getItem('user') || '{}');

export default createSlice({
  name: 'auth',
  initialState: user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null },
  reducers: {
    [REGISTER_SUCCESS]: (state) => {
      state.isLoggedIn = false;
    },
    [REGISTER_FAIL]: (state) => {
      state.isLoggedIn = false;
    },
    [LOGIN_SUCCESS]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [LOGIN_FAIL]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [LOGOUT]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
