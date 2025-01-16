import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOffer, OffersData } from '../types/offers';
import { APIRoute, AppRoute,} from '../const';
import { dropToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, UserInfo } from '../types/api';
import { PostReviewComment, ReviewComment } from '../types/comments';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  'data/fetchOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  'data/fetchFavoriteOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Favorite);
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

export const checkAuthAction = createAsyncThunk<UserInfo, undefined, AsyncThunkArguments>(
  'user/checkAuth',
  async(_arg, {extra: api}) =>{
    const {data} = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserInfo, AuthData, AsyncThunkArguments>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Index));

    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
