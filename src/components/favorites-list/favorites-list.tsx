import { OffersData } from '../../types/offers';
import { getGroupedOffers } from '../../utils/offers';
import FavoritesItems from '../favorites-items/favorites-items';

type FavoritesListProps = {
  offers: OffersData[];
}

function FavoritesList({offers}: FavoritesListProps):JSX.Element {
  const groupedOffers = getGroupedOffers(offers);

  const favoriteItems = groupedOffers.map((items) => <FavoritesItems key={items[0].id} groupedOffers={items}/>);

  return (
    <ul className="favorites__list">
      {favoriteItems}
    </ul>
  );
}

export default FavoritesList;
