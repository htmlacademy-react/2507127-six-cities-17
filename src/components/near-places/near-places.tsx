import { nanoid } from 'nanoid';
import PlaceCardItem from '../place-card-item/place-card-item';
import { OffersData } from '../../types/offers';

type NearPlacesProps = {
  nearOffers: OffersData[];
}

function NearPlaces({nearOffers}: NearPlacesProps):JSX.Element{
  const cardsList = nearOffers.map((item) => <PlaceCardItem offer={item} cardClass='near-places' key={nanoid()}/>);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">
  Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {cardsList}
      </div>
    </section>
  );
}

export default NearPlaces;
