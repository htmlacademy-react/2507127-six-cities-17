import { createAction } from '@reduxjs/toolkit';
import { OffersData } from '../types/offers';

export const changeCity = createAction<string>('changeCurrentCity');

export const loadOffers = createAction<OffersData[]>('loadOffers');
