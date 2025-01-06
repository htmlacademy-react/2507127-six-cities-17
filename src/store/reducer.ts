import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortOption } from '../const';
import { FullOffer, OffersData } from '../types/offers';
import { changeActiveOfferId, changeCity, changeSortOffers, requireAuthorization } from './action';
import { checkAuthAction, fetchNearbyOffersAction, fetchOfferCommentsAction, fetchOffersAction, getOfferByIdAction } from './api-actions';
import { ReviewComment } from '../types/comments';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OffersData[],
  currentOffer: null as FullOffer | null,
  nearbyOffers: [] as OffersData[],
  offerComments: [] as ReviewComment[],
  currentSortOffers: SortOption.Popular,
  activeOfferId: null as null | string,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isOfferLoading: false,
  isCommentsLoading: false,
  isNearbyOffersLoading: false,
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
    .addCase(getOfferByIdAction.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(getOfferByIdAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(getOfferByIdAction.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffersAction.pending, (state) => {
      state.isNearbyOffersLoading = true;
    })
    .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoading = false;
    })
    .addCase(fetchOfferCommentsAction.pending, (state) => {
      state.isCommentsLoading = true;
    })
    .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
      state.offerComments = action.payload;
      state.isCommentsLoading = false;
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
