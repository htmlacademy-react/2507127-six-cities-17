import { createAction } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';
import { SortOption } from '../const';

export const loadOffers = createAction<OffersData[]>('loadOffers');
export const changeCity = createAction<string>('changeCurrentCity');
export const changeSortOffers = createAction<SortOption>('changeSortOffers');
export const changeActiveOfferId = createAction<string | null>('changeActiveOfferId');
