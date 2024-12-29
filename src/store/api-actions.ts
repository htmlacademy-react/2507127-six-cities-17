import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { dropToken, getToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, UserData } from '../types/api';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() =>
      store.dispatch(setError(null))
    ,TIMEOUT_SHOW_ERROR);
  }
);


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

//Сделал такую проверку, так как иначе, при запросе к /login через requireAuthorization, возвращается ошибка 401
export const checkAuthStatus = () => {
  const token = getToken();
  if (!token) {
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } else {
    store.dispatch(checkAuthAction());
  }
};

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
