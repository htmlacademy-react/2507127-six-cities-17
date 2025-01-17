import { NameSpace } from '../../const';
import { OffersData } from '../../types/offers';
import { State } from '../../types/state';

export const selectFavoriteOffers = (state: State): OffersData[] => state[NameSpace.Favorite].favoriteOffers;
export const selectIsOfferFavorite = (state: State, offerId: string): boolean => state[NameSpace.Favorite].favoriteOffers.findIndex((offer) => offer.id === offerId) !== -1;


export const selectIsFavoriteOffersLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoriteOffersLoading;
