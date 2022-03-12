import IAction from './IAction';
import { SET_MESSAGE, CLEAR_MESSAGE } from './types';

export const setMessage = (message: string): IAction<String> => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
