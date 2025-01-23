import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SortOption } from '../../const';
import { OffersProcess } from '../../types/state';

const initialState: OffersProcess = {
  currentCity: CITIES[0],
  activeOfferId: null,
  currentSortOffers: SortOption.Popular,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    changeSortOffers: (state, action: PayloadAction<SortOption>) => {
      state.currentSortOffers = action.payload;
    },
    changeActiveOfferId: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    }
  },
});

export const {changeCity, changeSortOffers, changeActiveOfferId} = offersProcess.actions;
