export const SITE_NAME = '6 cities';
export const MAX_REVIEWS = 10;
export const TIMEOUT_SHOW_ERROR = 3000;
export const PASSWORD_MIN_LENGTH = 2;
export const STAR_RATING_MULTIPLIER = 20;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum Status {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export enum NameSpace {
  Data = 'data',
  Favorite = 'favorite',
  User = 'user',
  Offers = 'offers'
}

export enum SortOption {
  Popular = 'Popular',
  LowToHigh ='Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const PagesList = {
  Main: 'Main',
  Login: 'Login',
  Favorite: 'Favorite',
  Offer: 'Offer',
  NotFound: 'Not found'
} as const;

export const FormReviewValue = {
  Min: 50,
  Max: 300
} as const;

export enum GeneralCategory {
  Cities = 'cities',
  Favorites = 'favorites',
  Offer = 'offer',
  PlaceCard = 'place-card',
  NearPlaces = 'near-places',
  Reviews = 'reviews',
}

export const PinIcon = {
  Default: '/markup/img/pin.svg',
  Active: '/markup/img/pin-active.svg'
} as const;

export const TileLayerLink = {
  Main: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

export const ratingGradation = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export enum AppRoute {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}
