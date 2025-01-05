import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortOption } from '../const';

export const changeSortOffers = createAction<SortOption>('offers/changeSortOffers');
export const changeActiveOfferId = createAction<string | null>('offers/changeActiveOfferId');

export const changeCity = createAction<string>('city/changeCurrentCity');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
