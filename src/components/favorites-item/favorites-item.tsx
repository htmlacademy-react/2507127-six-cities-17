import { GeneralCategory } from '../../const';
import { OffersData } from '../../types/offers';
import PlaceCardItem from '../place-card-item/place-card-item';

type FavoritesItemProps = {
  offer: OffersData;
}

function FavoritesItem({offer}: FavoritesItemProps):JSX.Element {
  return (
    <PlaceCardItem cardClass={GeneralCategory.Favorites} offer={offer}/>
  );
}

export default FavoritesItem;
