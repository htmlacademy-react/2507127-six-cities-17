import { State } from '../types/state';

const selectOffers = (state: State) => state.offers;
const selectCity = (state: State) => state.currentCity;
const selectActiveOfferId = (state: State) => state.activeOfferId;
const selectCurrentSortOffers = (state: State) => state.currentSortOffers;

export { selectOffers, selectCity, selectActiveOfferId, selectCurrentSortOffers };
