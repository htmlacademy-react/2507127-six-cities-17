import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';
import { changeCity, changeSortOffers } from '../offers-process/offers-process.slice';

type Reducer = ReturnType<typeof rootReducer>;

export const localStorageSave: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        switch(action.type){
          case `${changeCity.type}`:
            localStorage.setItem('currentCity', JSON.stringify(action.payload));
            break;
          case `${changeSortOffers.type}`:
            localStorage.setItem('currentSortOffers', JSON.stringify(action.payload));
            break;
        }

        return next(action);
      };
