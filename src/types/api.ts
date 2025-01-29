import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type AuthData = {
  login: string;
  password: string;
}

export type FavoriteData = {
  offerId: string;
  isFavorite: boolean;
}

export type UserInfo = {
  avatarUrl: string;
  email: string;
  isPro: boolean;
  falsename: string;
  token: string;
}

export type AsyncThunkArguments = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
