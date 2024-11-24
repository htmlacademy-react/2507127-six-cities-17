
type SettingsType = {
  [key: string]: {width: number; height: number};
}

export const BookmarkSettings: SettingsType = {
  'place-card': {
    width: 18,
    height: 19,
  },
  'offer': {
    width: 31,
    height: 33,
  },
} as const;
