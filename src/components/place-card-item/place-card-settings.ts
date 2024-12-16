import { GeneralCategories } from '../../const';
import { ProportionsType } from '../../types/types';

export const PlaceCardSettings: ProportionsType = {
  [GeneralCategories.Cities]: {
    width: 260,
    height: 200,
  },
  [GeneralCategories.NearPlaces]: {
    width: 260,
    height: 200,
  },
  [GeneralCategories.Favorites]: {
    width: 150,
    height: 110,
  },
} as const;
