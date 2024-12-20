import { nanoid } from 'nanoid';
import LocationItem from '../locations-item/locations-item';
import { CITIES } from '../../const';

type LocationsListProps = {
  currentCity: string;
}

function LocationsList({ currentCity }: LocationsListProps): JSX.Element {
  const locationsList = CITIES.map((name) =>
    <LocationItem city={name} isActive={name === currentCity} key={nanoid()}/>
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
