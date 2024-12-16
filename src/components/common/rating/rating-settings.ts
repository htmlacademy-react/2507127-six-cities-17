import { GeneralCategories } from '../../../const';

type StyleType ={
  width: string;
}

type SettingsType = {
  [key: string]: {style: StyleType; ratingValue: boolean};
}

export const RatingSettings: SettingsType = {
  [GeneralCategories.Offer]: {
    style: {
      width: '80%'
    },
    ratingValue: true
  },
  [GeneralCategories.Reviews]: {
    style: {
      width: '80%'
    },
    ratingValue: false
  },
  [GeneralCategories.PlaceCard]: {
    style: {
      width: '100%'
    },
    ratingValue: false
  }
} as const;
