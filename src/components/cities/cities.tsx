import { GeneralCategory } from '../../const';
import { ActiveOfferChange } from '../../types/handlers';
import { OffersData } from '../../types/offers';
import CitiesEmptyPlaces from '../cities-empty-places/cities-empty-places';
import CitiesPlaces from '../cities-places/cities-places';
import Map from '../map/map';

type CitiesProps = {
  filteredOFfers: OffersData[];
  activeOfferId: string | null;
  currentCity: string;
  onHandleActiveOfferChange: ActiveOfferChange;
}

function Cities({filteredOFfers, activeOfferId, currentCity, onHandleActiveOfferChange}: CitiesProps):JSX.Element {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        {filteredOFfers.length > 0
          ? <CitiesPlaces filteredOFfers={filteredOFfers} onHandleActiveOfferChange={onHandleActiveOfferChange}/>
          : <CitiesEmptyPlaces currentCity={currentCity}/>}

        <div className="cities__right-section">
          {filteredOFfers.length && <Map mapClass={GeneralCategory.Cities} offers={filteredOFfers} activeOfferId={activeOfferId} />}
        </div>
      </div>
    </div>
  );
}

export default Cities;
