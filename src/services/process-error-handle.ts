import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { setError } from '../store/action';
import { TIMEOUT_SHOW_ERROR } from '../const';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() =>
      store.dispatch(setError(null))
    ,TIMEOUT_SHOW_ERROR);
  }
);

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

