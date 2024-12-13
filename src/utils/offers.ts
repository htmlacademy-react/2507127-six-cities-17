import { OffersData } from '../types/offers';

function getGroupedOffers(offers: OffersData[]): OffersData[][]{
  const groupedOffersByCity: Record<string, OffersData[]> = offers.reduce((groups, item) => {
    const { city } = item;
    groups[city.name] = groups[city.name] ?? [];
    groups[city.name].push(item);
    return groups;
  }, {} as Record<string, OffersData[]>);
  return Object.values(groupedOffersByCity);
}

function getAllCities(offers: OffersData[]): string[]{
  const cities: string[] = [];
  offers.forEach((offer) => {
    const {city} = offer;
    if (!cities.includes(city.name)) {
      cities.push(city.name);
    }
  });
  return cities;
}

function getFilteredOffers(offers: OffersData[], currentLocation: string): OffersData[]{
  return offers.filter((offer) => {
    const {city} = offer;
    return city.name === currentLocation;
  });
}

export {getGroupedOffers, getAllCities, getFilteredOffers};
