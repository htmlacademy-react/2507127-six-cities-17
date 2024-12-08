import { OffersData } from '../../types/offers';
import FavoritesItems from '../favorites-items/favorites-items';

type FavoritesListProps = {
  offers: OffersData[];
}

function FavoritesList({offers}: FavoritesListProps):JSX.Element {
  const groupedOffersByCity: Record<string, OffersData[]> = offers.reduce((groups, item) => {
    const { city } = item;
    groups[city.name] = groups[city.name] ?? [];
    groups[city.name].push(item);
    return groups;
  }, {} as Record<string, OffersData[]>);
  const groupedOffers = Object.values(groupedOffersByCity);

  const favoriteItems = groupedOffers.map((items) => <FavoritesItems key={items[0].id} groupedOffers={items}/>);

  return (
    <ul className="favorites__list">
      {favoriteItems}
    </ul>
  );
}

export default FavoritesList;
