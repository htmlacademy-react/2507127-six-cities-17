import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';
import { APIRoute, AuthorizationStatus } from '../const';
import { requireAuthorization } from './action';
import { dropToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, UserData } from '../types/api';

export const fetchOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  'data/fetchOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  'user/checkAuth',
  async(_arg, {extra: api}) =>{
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, AsyncThunkArguments>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
