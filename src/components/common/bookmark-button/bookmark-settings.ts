import { GeneralCategory } from '../../../const';
import { ProportionsType } from '../../../types/types';

export const BookmarkSettings: ProportionsType = {
  [GeneralCategory.PlaceCard]: {
    width: 18,
    height: 19,
  },
  [GeneralCategory.Offer]: {
    width: 31,
    height: 33,
  },
} as const;
