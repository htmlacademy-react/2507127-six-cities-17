import cn from 'classnames';
import { GeneralCategory } from '../../const';
import { OffersData } from '../../types/offers';
import CitiesEmptyPlaces from '../cities-empty-places/cities-empty-places';
import CitiesPlaces from '../cities-places/cities-places';
import Map from '../map/map';

type CitiesProps = {
  filteredOFfers: OffersData[];
  currentCity: string;
}

function Cities({filteredOFfers, currentCity}: CitiesProps):JSX.Element {
  return (
    <div className="cities">
      <div className={cn(
        'cities__places-container',
        {'cities__places-container--empty': !filteredOFfers.length},
        'container',
      )}
      >
        {filteredOFfers.length
          ? <CitiesPlaces filteredOFfers={filteredOFfers} />
          : <CitiesEmptyPlaces currentCity={currentCity}/>}

        <div className="cities__right-section">
          {filteredOFfers.length && <Map mapClass={GeneralCategory.Cities} offers={filteredOFfers} />}
        </div>
      </div>
    </div>
  );
}

export default Cities;
