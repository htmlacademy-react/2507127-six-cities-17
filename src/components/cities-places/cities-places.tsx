import { ActiveOfferChange } from '../../types/handlers';
import { OffersData } from '../../types/offers';
import FoundPlacesNumber from '../found-places-number/found-places-number';
import PlaceCardsList from '../place-cards-list/place-cards-list';
import PlacesSortForm from '../places-sort-form/places-sort-form';

type CitiesPlacesProps = {
  filteredOFfers: OffersData[];
  onHandleActiveOfferChange: ActiveOfferChange;
}

function CitiesPlaces({ filteredOFfers, onHandleActiveOfferChange}: CitiesPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <FoundPlacesNumber offersCount={filteredOFfers.length}/>
      {<PlacesSortForm/>}
      {<PlaceCardsList onHandleActiveOfferChange={onHandleActiveOfferChange} offers={filteredOFfers}/>}
    </section>
  );
}

export default CitiesPlaces;
