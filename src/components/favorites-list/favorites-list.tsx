import { OffersData } from '../../types/offers';
import { getGroupedOffers } from '../../utils/offers';
import FavoritesItems from '../favorites-items/favorites-items';

type FavoritesListProps = {
  offers: OffersData[];
}

function FavoritesList({offers}: FavoritesListProps):JSX.Element {
  const groupedOffers = getGroupedOffers(offers);
  const favoriteItems = groupedOffers.map((group) => <FavoritesItems key={group[0].id} groupedOffers={group}/>);

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoriteItems}
      </ul>
    </>
  );
}

export default FavoritesList;
