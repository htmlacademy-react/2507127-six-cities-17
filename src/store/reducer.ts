import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortOption } from '../const';
import { OffersData } from '../types/offers';
import { changeActiveOfferId, changeCity, changeSortOffers, loadOffers } from './action';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[],
  currentSortOffers: SortOption.Popular,
  activeOfferId: null as null | string
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOffers, (state, action) => {
      state.currentSortOffers = action.payload;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export {reducer};
