import PlaceCardItem from '../place-card-item/place-card-item';
import { OffersData } from '../../types/types';

type PlaceCardsListProps = {
  offers: OffersData[];
}

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element{
  const cardsList = offers.map((offer) => <PlaceCardItem offer={offer} cardClass='cities' key={offer.id}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
