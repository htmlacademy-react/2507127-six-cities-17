import { nanoid } from 'nanoid';
import { Locations } from '../../const';
import LocationItem from '../location-item/location-item';

function LocationsList(): JSX.Element {
  const locationsList = Object.values(Locations).map((name) =>
    <LocationItem locationName={name} active={name === 'Amsterdam'} key={nanoid()}/>
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

export default LocationsList;
