const SITE_NAME = '6 cities';

const Settings = {
  CardsCount: 5,
  GalleryImagesCount: 6
} as const;

const Locations = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
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

const enum GeneralCategories {
  Cities = 'cities',
  Favorites = 'favorites',
  Offer = 'offer',
  PlaceCard = 'place-card',
  NearPlaces = 'near-places',
  Reviews = 'reviews',
}

const ratingGradation = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export {SITE_NAME, Settings, Locations, SortOptions, OfferInsideItems, PagesList, AppRoute, AuthorizationStatus, ratingGradation, FormReviewValue, GeneralCategories};
