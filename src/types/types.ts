export type ProportionsType = {
  [key: string]: {width: number; height: number};
}

export type OffersData = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
      name: string;
      location: {
          latitude: number;
          longitude: number;
          zoom: number;
      };
  };
  location: {
      latitude: number;
      longitude: number;
      zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
