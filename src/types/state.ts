import { AuthorizationStatus, SortOption } from '../const';
import { store } from '../store';
import { ReviewComment } from './comments';
import { FullOffer, OffersData } from './offers';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type AppData = {
  offers: OffersData[];
  currentOffer: FullOffer | null;
  nearbyOffers: OffersData[];
  offerComments: ReviewComment[];

  isOffersDataLoading: boolean;
  isOfferLoading: boolean;
  isCommentsLoading: boolean;
  isNearbyOffersLoading: boolean;
}

export type OffersProcess = {
  currentCity: string;
  activeOfferId: null | string;
  currentSortOffers: SortOption;
}
