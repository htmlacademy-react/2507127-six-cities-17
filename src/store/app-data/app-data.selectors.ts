import { NameSpace } from '../../const';
import { FullOffer, OffersData } from '../../types/offers';
import { State } from '../../types/state';

export const selectOffers = (state: State): OffersData[] => state[NameSpace.Data].offers;
export const selectOffer = (state: State): FullOffer | null => state[NameSpace.Data].currentOffer;
export const selectNearbyOffers = (state: State): OffersData[] | null => state[NameSpace.Data].nearbyOffers;

export const selectIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const selectIsOfferLoading = (state: State): boolean => state[NameSpace.Data].isOfferLoading;
export const selectIsNearbyOffersLoading = (state: State): boolean => state[NameSpace.Data].isNearbyOffersLoading;
