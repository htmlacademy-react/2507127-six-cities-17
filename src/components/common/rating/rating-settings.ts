import { GeneralCategory } from '../../../const';

type StyleType ={
  width: string;
}

type SettingsType = {
  [key: string]: {style: StyleType; ratingValue: boolean};
}

export const RatingSettings: SettingsType = {
  [GeneralCategory.Offer]: {
    style: {
      width: '80%'
    },
    ratingValue: true
  },
  [GeneralCategory.Reviews]: {
    style: {
      width: '80%'
    },
    ratingValue: false
  },
  [GeneralCategory.PlaceCard]: {
    style: {
      width: '100%'
    },
    ratingValue: false
  }
} as const;
