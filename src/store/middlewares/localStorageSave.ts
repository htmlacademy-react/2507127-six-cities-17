import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const localStorageSave: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        switch(action.type){
          case 'city/changeCurrentCity':
            localStorage.setItem('currentCity', JSON.stringify(action.payload));
            break;
          case 'offers/changeSortOffers':
            localStorage.setItem('currentSortOffers', JSON.stringify(action.payload));
            break;
        }

        return next(action);
      };
