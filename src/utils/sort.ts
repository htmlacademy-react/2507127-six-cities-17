import { SortOption } from '../const';
import { OffersData } from '../types/offers';

function sortLowToHigh(offers: OffersData[]){
  return offers.sort((offerA, offerB) => offerA.price - offerB.price);
}

function sortHighToLow(offers: OffersData[]){
  return offers.sort((offerA, offerB) => offerB.price - offerA.price);
}

function sortTopRated(offers: OffersData[]){
  return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
}

export function sortOffers(offers: OffersData[], sortType: string): OffersData[] {
  switch(sortType) {
    case SortOption.LowToHigh:
      return sortLowToHigh(offers);
    case SortOption.HighToLow:
      return sortHighToLow(offers);
    case SortOption.TopRated:
      return sortTopRated(offers);
    default:
      return offers;
  }
}
