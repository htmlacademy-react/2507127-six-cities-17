import { NameSpace } from '../../const';
import { ReviewComment } from '../../types/comments';
import { FullOffer, OffersData } from '../../types/offers';
import { State } from '../../types/state';

export const selectOffers = (state: State): OffersData[] => state[NameSpace.Data].offers;
export const selectFavoriteOffers = (state: State): OffersData[] => state[NameSpace.Data].favoriteOffers;
export const selectOffer = (state: State): FullOffer | null => state[NameSpace.Data].currentOffer;
export const selectNearbyOffers = (state: State): OffersData[] | null => state[NameSpace.Data].nearbyOffers;
export const selectOfferComments = (state: State): ReviewComment[] | null => state[NameSpace.Data].offerComments;

export const selectIsOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const selectIsOfferLoading = (state: State): boolean => state[NameSpace.Data].isOfferLoading;
export const selectIsCommentsLoading = (state: State): boolean => state[NameSpace.Data].isCommentsLoading;
export const selectIsNearbyOffersLoading = (state: State): boolean => state[NameSpace.Data].isNearbyOffersLoading;
