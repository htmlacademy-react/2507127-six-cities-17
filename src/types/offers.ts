
export type CityType = {
  name: string;
  location: LocationType;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OffersData = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type FullFavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: HostType;
  images: [string];
  maxAdults: number;
  previewImage: string;
}

export type FullOffer = Omit<FullFavoriteOffer, 'previewImage'>

export type PointCoordinates = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type CityCoordinates = Omit<PointCoordinates, 'id'>


