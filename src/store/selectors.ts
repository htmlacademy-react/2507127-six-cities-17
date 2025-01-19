import { AuthorizationStatus } from '../const';
import { OffersData } from '../types/offers';
import { State } from '../types/state';

export const selectOffers = (state: State): OffersData[] => state.offers;
export const selectCity = (state: State): string => state.currentCity;
export const selectActiveOfferId = (state: State): string | null => state.activeOfferId;
export const selectCurrentSortOffers = (state: State): string => state.currentSortOffers;
export const selectIsOffersDataLoading = (state: State): boolean => state.isOffersDataLoading;
export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state.authorizationStatus;
