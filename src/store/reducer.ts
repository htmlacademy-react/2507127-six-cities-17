import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortOption } from '../const';
import { OffersData } from '../types/offers';
import { changeActiveOfferId, changeCity, changeSortOffers, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[],
  currentSortOffers: SortOption.Popular,
  activeOfferId: null as null | string,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null as string | null
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});

export {reducer};
