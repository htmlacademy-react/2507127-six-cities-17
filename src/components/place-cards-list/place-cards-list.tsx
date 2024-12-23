import PlaceCardItem from '../place-card-item/place-card-item';
import { OffersData } from '../../types/offers';
import { GeneralCategory } from '../../const';
import { useParams } from 'react-router-dom';
import { ActiveOfferChange } from '../../types/handlers';

type PlaceCardsListProps = {
  offers: OffersData[];
  onHandleActiveOfferChange?: ActiveOfferChange;
}

function PlaceCardsList({offers, onHandleActiveOfferChange}: PlaceCardsListProps): JSX.Element{
  const {id} = useParams();
  //На странице offer карточка с текущим id не будет отрисована. На странице main содержимое id всегда будет undefined
  const filteredOffers = offers.filter((offer) => offer.id !== id);
  const cardsList = filteredOffers.map((offer) => <PlaceCardItem offer={offer} onHandleActiveOfferChange={onHandleActiveOfferChange} cardClass={GeneralCategory.Cities} key={offer.id}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
