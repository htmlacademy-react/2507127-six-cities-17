
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

export {Settings, Locations, SortOptions, OfferInsideItems};
