import { createAction } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';

export const changeCurrentCity = createAction<string>('changeCurrentCity');

export const loadOffers = createAction<OffersData[]>('loadOffers');
