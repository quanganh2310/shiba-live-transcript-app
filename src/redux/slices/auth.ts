import { RootState } from './../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAuthUser } from '../../types/user';
import authService from '../../api/services/auth.service';
import { setMessage } from './message';

const user: IAuthUser = JSON.parse(localStorage.getItem('user') || 'null');
export interface IAuthState {
  isLoggedIn: boolean;
  user: IAuthUser | null;
}

const initialState: IAuthState = user
  ? {
      isLoggedIn: true,
      user: user,
    }
  : {
      isLoggedIn: false,
      user: null,
    };

export interface UserAccount {
  email: string;
  password: string;
}

export const register = createAsyncThunk('auth/register', async (user: UserAccount, thunkAPI) => {
  try {
    const data = await authService.register(user.email, user.password);
    thunkAPI.dispatch(setMessage('Login successful!'));
    return data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue({
      message: 'Register failed !',
    });
  }
});

export const login = createAsyncThunk('auth/login', async (user: UserAccount, thunkAPI) => {
  try {
    const data = await authService.login(user.email, user.password);
    thunkAPI.dispatch(setMessage('Login successful!'));
    return { user: data };
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue({
      message: 'Login failed !',
    });
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsLoggedin = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
