import { memo } from 'react';
import LocationItemLinkWrapper from '../location-item-link-wrapper/location-item-link-wrapper';

type LocationsItemProps = {
  city: string;
  isSingle?: boolean;
}

function LocationsItemTemplate({city, isSingle = false}: LocationsItemProps): JSX.Element{
  return (
    isSingle ? (
      <div className="locations__item">
        <LocationItemLinkWrapper city={city} />
      </div>) : (
      <li className="locations__item">
        <LocationItemLinkWrapper city={city} />
      </li>)
  );
}

const LocationsItem = memo(LocationsItemTemplate);

export default LocationsItem;
