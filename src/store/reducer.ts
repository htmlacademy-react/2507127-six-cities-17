import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortOption } from '../const';
import { OffersData } from '../types/offers';
import { changeActiveOfferId, changeCity, changeSortOffers, requireAuthorization } from './action';
import { checkAuthAction, fetchOffersAction } from './api-actions';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[],
  currentSortOffers: SortOption.Popular,
  activeOfferId: null as null | string,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(changeCity,(state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled,(state, action) => {
      state.offers = action.payload;
      state.isOffersDataLoading = false;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(checkAuthAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(changeSortOffers, (state, action) => {
      state.currentSortOffers = action.payload;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
