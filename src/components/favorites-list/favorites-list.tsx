import { OffersData } from '../../types/offers';
import FavoritesItems from '../favorites-items/favorites-items';

type FavoritesListProps = {
  offers: OffersData[];
}

function FavoritesList({offers}: FavoritesListProps):JSX.Element {
  const groupedOffersByCity: Record<string, OffersData[]> = offers.reduce((acc, item) => {
    const { city } = item;
    const group = (acc[city.name] || []);
    group.push(item);
    acc[city.name] = group;
    return acc;
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
