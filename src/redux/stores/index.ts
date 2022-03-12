import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import messageSlice from './messageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    message: messageSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
