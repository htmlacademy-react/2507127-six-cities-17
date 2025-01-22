import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appData } from './app-data/app-data.slice';
import { userProcess } from './user-process/user-process.slice';
import { offersProcess } from './offers-process/offers-process.slice';
import { favoriteProcess } from './favorite-process/favorite-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
});
