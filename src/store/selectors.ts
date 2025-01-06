import { AuthorizationStatus } from '../const';
import { ReviewComment } from '../types/comments';
import { FullOffer, OffersData } from '../types/offers';
import { State } from '../types/state';

export const selectOffers = (state: State): OffersData[] => state.offers;
export const selectOffer = (state: State): FullOffer | null => state.currentOffer;
export const selectNearbyOffers = (state: State): OffersData[] | null => state.nearbyOffers;
export const selectOfferComments = (state: State): ReviewComment[] | null => state.offerComments;
export const selectCity = (state: State): string => state.currentCity;
export const selectActiveOfferId = (state: State): string | null => state.activeOfferId;
export const selectCurrentSortOffers = (state: State): string => state.currentSortOffers;

export const selectIsOffersDataLoading = (state: State): boolean => state.isOffersDataLoading;
export const selectIsOfferLoading = (state: State): boolean => state.isOfferLoading;
export const selectIsCommentsLoading = (state: State): boolean => state.isCommentsLoading;
export const selectIsNearbyOffersLoading = (state: State): boolean => state.isNearbyOffersLoading;

export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state.authorizationStatus;
