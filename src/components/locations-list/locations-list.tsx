import { nanoid } from 'nanoid';
import LocationItem from '../locations-item/locations-item';
import { CurrentLocationChange } from '../../types/handlers';

type LocationsListProps = {
  cities: string[];
  currentLocation: string;
  onHandleCurrentLocationChange: CurrentLocationChange;
}

function LocationsList({cities, currentLocation, onHandleCurrentLocationChange}: LocationsListProps): JSX.Element {

  const locationsList = Object.values(cities).map((name) =>
    <LocationItem locationName={name} isActive={name === currentLocation} onHandleCurrentLocationChange={onHandleCurrentLocationChange} key={nanoid()}/>
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
