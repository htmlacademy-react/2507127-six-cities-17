import { ActiveOfferChange } from '../../types/handlers';
import { OffersData } from '../../types/offers';
import PlaceCardsList from '../place-cards-list/place-cards-list';

type NearPlacesProps = {
  nearOffers: OffersData[];
  onHandleActiveOfferChange: ActiveOfferChange;
}

function NearPlaces({nearOffers, onHandleActiveOfferChange}: NearPlacesProps):JSX.Element{
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
  Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        <PlaceCardsList onHandleActiveOfferChange={onHandleActiveOfferChange} offers={nearOffers}/>
      </div>
    </section>
  );
}

export default NearPlaces;
