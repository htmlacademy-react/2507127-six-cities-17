import { SortOption } from '../const';
import { store } from '../store';
import { changeCity, changeSortOffers } from '../store/action';
import { getLocalStoredString } from '../utils/local-storage';

const storedCurrentCity = getLocalStoredString('currentCity');
const storedCurrentSortOffers = getLocalStoredString('currentSortOffers');

export function initLocalStorage(){
  if (storedCurrentCity) {
    store.dispatch(changeCity(storedCurrentCity));
  }
  if (storedCurrentSortOffers) {
    store.dispatch(changeSortOffers(storedCurrentSortOffers as SortOption));
  }
}
