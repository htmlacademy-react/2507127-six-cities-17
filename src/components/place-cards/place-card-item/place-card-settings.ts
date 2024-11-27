
type SettingsType = {
  [key: string]: {width: number; height: number};
}

export const PlaceCardSettings: SettingsType = {
  'cities': {
    width: 260,
    height: 200,
  },
  'near-places': {
    width: 260,
    height: 200,
  },
  'favorites': {
    width: 150,
    height: 110,
  },
} as const;
