import { CityCoordinates, PointCoordinates, OffersData } from '../types/offers';

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

const getPointCoordinates = (offer: OffersData) => {
  const {id,title, location} = offer;
  return {
    id,
    title,
    lat: location.latitude,
    lng: location.longitude,
    zoom: location.zoom
  };
};

function getPointsData(offers: OffersData[]): PointCoordinates[] {
  const locations = offers.map((offer) => getPointCoordinates(offer));
  return locations;
}

function getCurrentCityData(offers: OffersData[]): CityCoordinates{
  const city = offers[0].city;
  const {name, location} = city;
  return {
    title: name,
    lat: location.latitude,
    lng: location.longitude,
    zoom: location.zoom
  };
}

function getSelectedPonit(offers: OffersData[], id: string): PointCoordinates | null{
  const currentPoint = offers.find((offer) => offer.id === id);
  if (currentPoint === undefined) {
    return null;
  }
  return getPointCoordinates(currentPoint);
}

export {getGroupedOffers, getAllCities, getFilteredOffers, getPointsData, getCurrentCityData, getSelectedPonit};
