import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferCommentsAction, fetchOffersAction, getOfferByIdAction } from '../api-actions';

const initialState: AppData = {
  offers: [],
  favoriteOffers: [],
  currentOffer: null,
  nearbyOffers: [],
  offerComments: [],

  isOffersDataLoading: false,
  isOfferLoading: false,
  isCommentsLoading: false,
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

      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
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
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
      })

      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
        state.isCommentsLoading = false;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.isCommentsLoading = false;
      });
  },
});
