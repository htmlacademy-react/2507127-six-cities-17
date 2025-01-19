import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectCity = (state: State): string => state[NameSpace.Offers].currentCity;

export const selectActiveOfferId = (state: State): string | null => state[NameSpace.Offers].activeOfferId;

export const selectCurrentSortOffers = (state: State): string => state[NameSpace.Offers].currentSortOffers;
