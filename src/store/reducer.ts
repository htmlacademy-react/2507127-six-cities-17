import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortOption } from '../const';
import { OffersData } from '../types/offers';
import { changeActiveOfferId, changeCity, changeSortOffers, loadOffers } from './action';
import { getLocalStoredString } from '../utils/common';

//Насколько я понял, взаимодействие с localStorage должно происходить через redux-thunk. В дальнейшем переделаю
const storedCurrentSortOffers = getLocalStoredString('currentSortOffers');
const storedCurrentCity = getLocalStoredString('currentCity');

const initialState = {
  currentCity: storedCurrentCity || CITIES[0],
  offers: [] as OffersData[],
  currentSortOffers: storedCurrentSortOffers || SortOption.Popular,
  activeOfferId: null as null | string
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity,(state, action) => {
      state.currentCity = action.payload;
      localStorage.setItem('currentCity', JSON.stringify(state.currentCity));
    })
    .addCase(loadOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOffers, (state, action) => {
      state.currentSortOffers = action.payload;
      localStorage.setItem('currentSortOffers', JSON.stringify(state.currentSortOffers));
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export {reducer};
