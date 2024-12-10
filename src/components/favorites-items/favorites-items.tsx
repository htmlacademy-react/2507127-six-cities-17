import { OffersData } from '../../types/offers';
import FavoritesItem from '../favorites-item/favorites-item';
import LocationsItem from '../locations-item/locations-item';

type FavoritesItemsProps = {
  groupedOffers: OffersData[];
}

function FavoritesItems({groupedOffers}: FavoritesItemsProps):JSX.Element {
  const cityName = groupedOffers[0].city.name;
  const favoritesItems = groupedOffers.map((item) => <FavoritesItem key={item.id} offer={item}/>);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsItem locationName={cityName} isSingle/>
      </div>
      <div className="favorites__places">
        {favoritesItems}
      </div>
    </li>
  );
}

export default FavoritesItems;
