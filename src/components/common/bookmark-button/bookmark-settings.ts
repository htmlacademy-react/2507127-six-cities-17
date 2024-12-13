import { GeneralCategories } from '../../../const';
import { ProportionsType } from '../../../types/types';

export const BookmarkSettings: ProportionsType = {
  [GeneralCategories.PlaceCard]: {
    width: 18,
    height: 19,
  },
  [GeneralCategories.Offer]: {
    width: 31,
    height: 33,
  },
} as const;
