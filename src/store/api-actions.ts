import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOffer, OffersData } from '../types/offers';
import { APIRoute, AppRoute, NameSpace,} from '../const';
import { dropToken, saveToken } from '../services/token';
import { AsyncThunkArguments, AuthData, FavoriteData, UserInfo } from '../types/api';
import { PostReviewComment, ReviewComment } from '../types/comments';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  `${NameSpace.Data}/fetchOffers`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<OffersData[], undefined, AsyncThunkArguments>(
  `${NameSpace.Data}/fetchFavoriteOffers`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(APIRoute.Favorite);
    return data;
  }
);

export const getOfferByIdAction = createAsyncThunk<FullOffer, string, AsyncThunkArguments>(
  `${NameSpace.Data}/getOffer`,
  async(id, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<OffersData[], string, AsyncThunkArguments>(
  `${NameSpace.Data}/fetchNearbyOffers`,
  async(id, {extra: api}) => {
    const {data} = await api.get<OffersData[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferCommentsAction = createAsyncThunk<ReviewComment[], string, AsyncThunkArguments>(
  `${NameSpace.Data}/fetchOfferComments`,
  async(id, {extra: api}) => {
    const {data} = await api.get<ReviewComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postOfferCommentAction = createAsyncThunk<ReviewComment, PostReviewComment, AsyncThunkArguments>(
  `${NameSpace.Data}/postOfferComment`,
  async({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewComment>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserInfo, undefined, AsyncThunkArguments>(
  `${NameSpace.User}/checkAuth`,
  async(_arg, {extra: api}) =>{
    const {data} = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserInfo, AuthData, AsyncThunkArguments>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    //Добавил загрузку избранных офферов, так как иначе они не загружались без обновления страницы
    dispatch(fetchFavoriteOffersAction());
    dispatch(redirectToRoute(AppRoute.Index));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkArguments>(
  `${NameSpace.User}/logout`,
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const uploadFavoriteStatusAction = createAsyncThunk<OffersData, FavoriteData, AsyncThunkArguments>(
  `${NameSpace.Favorite}/uploadStatus`,
  async({offerId, isFavorite}, {getState, extra: api}) => {
    const offerStatus = Number(!isFavorite);
    const {data} = await api.post<FullOffer>(`${APIRoute.Favorite}/${offerId}/${offerStatus}`);
    const {offers} = getState().data;
    const currentOffer = offers.find((offer) => offer.id === data.id);

    if (!currentOffer) {
      throw new Error(`Offer not found: ${data.id}`);
    }

    return {...currentOffer, isFavorite: data.isFavorite};
  }
);
