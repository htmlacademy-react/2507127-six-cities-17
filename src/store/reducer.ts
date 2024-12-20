import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { OffersData } from '../types/offers';
import { changeCurrentCity, loadOffers } from './action';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[]
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers,(state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
