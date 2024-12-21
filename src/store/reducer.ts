import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortOption } from '../const';
import { OffersData } from '../types/offers';
import { changeCity, changeSortOffers, loadOffers } from './action';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[],
  currentSortOffers: SortOption.Popular
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
    });
});

export {reducer};
