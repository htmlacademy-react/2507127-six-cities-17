import { createAction } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';
import { SortOption } from '../const';

export const loadOffers = createAction<OffersData[]>('offers/loadOffers');
export const changeSortOffers = createAction<SortOption>('offers/changeSortOffers');
export const changeActiveOfferId = createAction<string | null>('offers/changeActiveOfferId');

export const changeCity = createAction<string>('city/changeCurrentCity');
