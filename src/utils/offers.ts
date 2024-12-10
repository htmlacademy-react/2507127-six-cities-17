import { OffersData } from '../types/offers';

function getGroupedOffers(offers: OffersData[]){
  const groupedOffersByCity: Record<string, OffersData[]> = offers.reduce((groups, item) => {
    const { city } = item;
    groups[city.name] = groups[city.name] ?? [];
    groups[city.name].push(item);
    return groups;
  }, {} as Record<string, OffersData[]>);
  return Object.values(groupedOffersByCity);
}

export {getGroupedOffers};
