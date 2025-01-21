import LocationItem from '../locations-item/locations-item';
import { CITIES } from '../../const';
import { memo, useMemo } from 'react';

function LocationsListTemplate(): JSX.Element {
  const locations = useMemo(() => CITIES.map((name) =>
    <LocationItem city={name} key={name}/>
  ), []);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations}
        </ul>
      </section>
    </div>
  );
}

const LocationsList = memo(LocationsListTemplate);

export default LocationsList;
