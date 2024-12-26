import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  id: number;
  email: string;
  token: string;
}

export type AsyncThunkArguments = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
