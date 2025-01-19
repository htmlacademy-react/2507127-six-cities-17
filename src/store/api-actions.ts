import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOffer, OffersData } from '../types/offers';
import { APIRoute, AuthorizationStatus } from '../const';
import { requireAuthorization } from './action';
import { dropToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, UserData } from '../types/api';
import { PostReviewComment, ReviewComment } from '../types/comments';

export const fetchOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  'data/fetchOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Offers);
    return data;
  }
);

export const getOfferByIdAction = createAsyncThunk<FullOffer, string, AsyncThunkArguments>(
  'data/getOffer',
  async(id, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<OffersData[], string, AsyncThunkArguments>(
  'data/fetchNearbyOffers',
  async(id, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferCommentsAction = createAsyncThunk<ReviewComment[], string, AsyncThunkArguments>(
  'data/fetchOfferComments',
  async(id, {extra: api}) => {
    const {data} = await api.get<ReviewComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postOfferCommentAction = createAsyncThunk<ReviewComment, PostReviewComment, AsyncThunkArguments>(
  'data/postOfferComment',
  async({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewComment>(`${APIRoute.Comments}/${id}`, {comment, rating});
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
