import LocationsItem from '../locations-item/locations-item';
import PlaceCardItem from '../place-card-item/place-card-item';

function FavoritesItem():JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsItem locationName={'Amsterdam'} isSingle/>
      </div>
      <div className="favorites__places">
        <PlaceCardItem cardClass={'favorites'} isFavorites/>
      </div>
    </li>
  );
}

export default FavoritesItem;
