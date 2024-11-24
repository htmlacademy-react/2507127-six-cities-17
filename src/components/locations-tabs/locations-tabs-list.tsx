import { nanoid } from 'nanoid';
import { Locations } from '../../const';
import LocationsTabsItem from './locations-tabs-item';

function LocationsTabsList(): JSX.Element {
  const locationsList = Object.values(Locations).map((name) =>
    <LocationsTabsItem locationName={name} active={name === 'Amsterdam'} key={nanoid()}/>
  );

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locationsList}
        </ul>
      </section>
    </div>

  );
}

export default LocationsTabsList;
