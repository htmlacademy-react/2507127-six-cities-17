import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, UserData } from '../types/api';

export const fetchOffersAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OffersData[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  'user/checkAuth',
  async(_arg, {dispatch, extra: api}) =>{
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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