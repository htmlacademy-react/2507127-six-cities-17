import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchNearbyOffersAction, fetchOffersAction, getOfferByIdAction, uploadFavoriteStatusAction } from '../api-actions';

const initialState: AppData = {
  offers: [],
  currentOffer: null,
  nearbyOffers: [],

  isOffersDataLoading: false,
  isOfferLoading: false,
  isNearbyOffersLoading: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled,(state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })

      .addCase(uploadFavoriteStatusAction.fulfilled, (state, action) => {
        const offersIndex = state.offers.findIndex((item) => item.id === action.payload.id);
        if (offersIndex !== -1) {
          state.offers[offersIndex].isFavorite = action.payload.isFavorite;
        }

        const nearbyIndex = state.nearbyOffers.findIndex((item) => item.id === action.payload.id);
        if (nearbyIndex !== -1) {
          state.nearbyOffers[nearbyIndex].isFavorite = action.payload.isFavorite;
        }

        if (state.currentOffer && state.currentOffer.id === action.payload.id) {
          state.currentOffer.isFavorite = action.payload.isFavorite;
        }

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
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
      });
  },
});
