import { OffersData } from '../types/offers';
import { State } from '../types/state';

const selectOffers = (state: State): OffersData[] => state.offers;
const selectCity = (state: State): string => state.currentCity;
const selectActiveOfferId = (state: State): string | null => state.activeOfferId;
const selectCurrentSortOffers = (state: State): string => state.currentSortOffers;

export { selectOffers, selectCity, selectActiveOfferId, selectCurrentSortOffers };
