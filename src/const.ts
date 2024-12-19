const SITE_NAME = '6 cities';
const DEFAULT_CITY = 'Paris';
const MAX_REVIEWS = 10;

const Settings = {
  CardsCount: 5,
  GalleryImagesCount: 6
} as const;

const SortOptions = {
  Popular: 'Popular',
  LowToHigh:'Price: low to high',
  HighToLow:'Price: high to low',
  TopRated:'Top rated first',
} as const;

const OfferInsideItems = {
  WiFi: 'Wi-Fi',
  WashingMachine: 'Washing machine',
  Towels: 'Towels',
  Heating: 'Heating',
  CoffeeMachine: 'Coffee machine',
  BabySeat: 'Baby seat',
  Kitchen: 'Kitchen',
  Dishwasher: 'Dishwasher',
  CabelTV: 'Cabel TV',
  Fridge: 'Fridge',
};

const PagesList = {
  Main: 'Main',
  Login: 'Login',
  Favorite: 'Favorite',
  Offer: 'Offer',
  NotFound: 'Not found'
} as const;

const enum AppRoute {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const FormReviewValue = {
  Min: 50,
  Max: 300
} as const;

const enum GeneralCategory {
  Cities = 'cities',
  Favorites = 'favorites',
  Offer = 'offer',
  PlaceCard = 'place-card',
  NearPlaces = 'near-places',
  Reviews = 'reviews',
}

const PinIcon = {
  Default: '/markup/img/pin.svg',
  Active: '/markup/img/pin-active.svg'
} as const;

const TileLayerLink = {
  Main: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;

const ratingGradation = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export {
  SITE_NAME,
  DEFAULT_CITY,
  MAX_REVIEWS,
  Settings,
  SortOptions,
  OfferInsideItems,
  PagesList,
  AppRoute,
  AuthorizationStatus,
  GeneralCategory,
  ratingGradation,
  FormReviewValue,
  PinIcon,
  TileLayerLink};
