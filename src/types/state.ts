import { AuthorizationStatus, SortOption, Status } from '../const';
import { store } from '../store';
import { UserInfo } from './api';
import { ReviewComment } from './comments';
import { FullFavoriteOffer, FullOffer, OffersData } from './offers';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: null | UserInfo;
};

export type AppData = {
  offers: OffersData[];
  currentOffer: FullOffer | null;
  nearbyOffers: OffersData[];

  isOffersDataLoading: boolean;
  isOfferLoading: boolean;
  isNearbyOffersLoading: boolean;
}

export type FavoriteProcess = {
  favoriteOffers: (OffersData | FullFavoriteOffer)[];

  isFavoriteOffersLoading: boolean;
  uploadingFavoriteStatus: Status;
}

export type OffersProcess = {
  currentCity: string;
  activeOfferId: null | string;
  currentSortOffers: SortOption;
}

export type CommentProcess = {
  offerComments: ReviewComment[];

  isCommentsLoading: boolean;
  isCommentAdding: boolean;
}
