import { NEARBY_OFFERS_NUMBER } from '../const';
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


function getFilteredOffers(offers: OffersData[], currentLocation: string): OffersData[]{
  const filteredOffers = offers.filter((offer) => {
    const {city} = offer;
    return city.name === currentLocation;
  });
  return filteredOffers.length ? filteredOffers : [];
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
  if (offers.length === 0) {
    return [];
  }

  return offers.map((offer) => getPointCoordinates(offer));
}

function getCurrentCityData(filteredOffers: OffersData[]): CityCoordinates | null {
  if(filteredOffers.length === 0) {
    return null;
  }
  const city = filteredOffers[0].city;
  const {name, location} = city;
  return {
    title: name,
    lat: location.latitude,
    lng: location.longitude,
    zoom: location.zoom
  };
}

function getSelectedPoint(offers: OffersData[], id: string): PointCoordinates | null{
  const currentPoint = offers.find((offer) => offer.id === id);
  if (currentPoint === undefined) {
    return null;
  }
  return getPointCoordinates(currentPoint);
}

function getNearOffers(offers: OffersData[], allOffers: OffersData[], id: string| undefined) {
  if (id === undefined) {
    return null;
  }

  const currentOffer = allOffers.find((offer) => offer.id === id);
  const slicedOffers = offers.slice(0, NEARBY_OFFERS_NUMBER);
  if (currentOffer) {
    slicedOffers.push(currentOffer);
  }
  return slicedOffers;
}


export {getGroupedOffers, getFilteredOffers, getPointsData, getCurrentCityData, getSelectedPoint, getNearOffers};
