import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types';
// const initialState = {};
// export default function (state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_MESSAGE:
//       return { message: payload };
//     case CLEAR_MESSAGE:
//       return { message: "" };
//     default:
//       return state;
//   }
// }
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'message',
  initialState: { message: '' },
  reducers: {
    [SET_MESSAGE]: (state, action) => {
      state.message = action.payload;
    },
    [CLEAR_MESSAGE]: (state) => {
      state.message = '';
    },
  },
});
