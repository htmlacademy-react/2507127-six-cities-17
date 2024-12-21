import { GeneralCategory } from '../../const';
import { useAppSelector } from '../../hooks';
import { ActiveOfferChange } from '../../types/handlers';
import { getFilteredOffers } from '../../utils/offers';
import CitiesPlaces from '../cities-places/cities-places';
import Map from '../map/map';

type CitiesProps = {
  activeOfferId: string | null;
  currentCity: string;
  onHandleActiveOfferChange: ActiveOfferChange;
}

function Cities({activeOfferId, currentCity, onHandleActiveOfferChange}: CitiesProps):JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const filteredOFfers = getFilteredOffers(offers, currentCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces filteredOFfers={filteredOFfers} onHandleActiveOfferChange={onHandleActiveOfferChange}/>
        <div className="cities__right-section">
          <Map mapClass={GeneralCategory.Cities} offers={filteredOFfers} activeOfferId={activeOfferId} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
