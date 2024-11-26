
type StyleType ={
  width: string;
}

type SettingsType = {
  [key: string]: {style: StyleType; ratingValue: boolean};
}

export const RatingSettings: SettingsType = {
  'offer': {
    style: {
      width: '80%'
    },
    ratingValue: true
  },
  'place-card': {
    style: {
      width: '100%'
    },
    ratingValue: false
  }
} as const;
