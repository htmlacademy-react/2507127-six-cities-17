import { createSlice } from '@reduxjs/toolkit';
import { FavoriteProcess } from '../../types/state';
import { NameSpace, Status } from '../../const';
import { fetchFavoriteOffersAction, uploadFavoriteStatusAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteOffers: [],

  isFavoriteOffersLoading: false,
  uploadingFavoriteStatus: Status.Idle
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
      })

      .addCase(uploadFavoriteStatusAction.pending, (state) => {
        state.uploadingFavoriteStatus = Status.Loading;
      })
      .addCase(uploadFavoriteStatusAction.fulfilled, (state, action) => {
        state.uploadingFavoriteStatus = Status.Success;
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((item) => item.id !== action.payload.id);
        }
        state.uploadingFavoriteStatus = Status.Idle;
      })
      .addCase(uploadFavoriteStatusAction.rejected, (state) => {
        state.uploadingFavoriteStatus = Status.Error;
        state.uploadingFavoriteStatus = Status.Idle;
      });
  },
});
