import { ChangeEvent } from 'react';

export type ActiveOfferChange = (id: string | null) => void;


export type onHandleRatingChangeType = (evt: ChangeEvent<HTMLInputElement>) => void

export type onhandleChangeReviewType = (evt: ChangeEvent<HTMLTextAreaElement>) => void
