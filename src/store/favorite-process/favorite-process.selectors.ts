import { NameSpace } from '../../const';
import { OffersData } from '../../types/offers';
import { State } from '../../types/state';

export const selectFavoriteOffers = (state: State): OffersData[] => state[NameSpace.Favorite].favoriteOffers;

export const selectIsFavoriteOffersLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoriteOffersLoading;

