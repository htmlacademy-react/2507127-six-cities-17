import { GeneralCategory } from '../../const';
import { ProportionsType } from '../../types/types';

export const PlaceCardSettings: ProportionsType = {
  [GeneralCategory.Cities]: {
    width: 260,
    height: 200,
  },
  [GeneralCategory.NearPlaces]: {
    width: 260,
    height: 200,
  },
  [GeneralCategory.Favorites]: {
    width: 150,
    height: 110,
  },
} as const;
