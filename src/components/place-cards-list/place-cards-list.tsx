import PlaceCardItem from '../place-card-item/place-card-item';
import { OffersData } from '../../types/offers';
import { ActiveOfferChange } from '../../types/handlers';

type PlaceCardsListProps = {
  offers: OffersData[];
  onHandleActiveOfferChange?: ActiveOfferChange;
}

function PlaceCardsList({offers, onHandleActiveOfferChange}: PlaceCardsListProps): JSX.Element{
  const cardsList = offers.map((offer) => <PlaceCardItem onHandleActiveOfferChange={onHandleActiveOfferChange} offer={offer} cardClass='cities' key={offer.id}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
