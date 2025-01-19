import { Status } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectUploadingFavoriteStatus } from '../../store/favorite-process/favorite-process.selectors';
import { OffersData } from '../../types/offers';
import { getGroupedOffers } from '../../utils/offers';
import LoadingScreen from '../common/loading-screen/loading-screen';
import FavoritesItems from '../favorites-items/favorites-items';

type FavoritesListProps = {
  offers: OffersData[];
}

function FavoritesList({offers}: FavoritesListProps):JSX.Element {
  const groupedOffers = getGroupedOffers(offers);
  const favoriteItems = groupedOffers.map((group) => <FavoritesItems key={group[0].id} groupedOffers={group}/>);

  const uploadingStatus = useAppSelector(selectUploadingFavoriteStatus);
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        { uploadingStatus === Status.Loading
          ? <LoadingScreen isRelative/>
          : favoriteItems}
      </ul>
    </>
  );
}

export default FavoritesList;
