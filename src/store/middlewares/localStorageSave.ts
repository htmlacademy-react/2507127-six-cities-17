import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const localStorageSave: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        switch(action.type){
          case 'offers/changeCurrentCity':
            localStorage.setItem('currentCity', JSON.stringify(action.payload));
            break;
          case 'offers/changeSortOffers':
            localStorage.setItem('currentSortOffers', JSON.stringify(action.payload));
            break;
        }

        return next(action);
      };
