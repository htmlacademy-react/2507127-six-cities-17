import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationsItemProps = {
  locationName: string;
  isActive?: boolean;
  isSingle?: boolean;
}

type LocationItemLinkProps = Omit<LocationsItemProps, 'isSingle'>

function LocationItemLink({locationName, isActive}: LocationItemLinkProps): JSX.Element{
  return (
    <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={AppRoute.Index}>
      <span>{locationName}</span>
    </Link>
  );
}

function LocationsItem({locationName, isActive = true, isSingle = false}: LocationsItemProps): JSX.Element{
  return (
    isSingle ? (
      <div className="locations__item">
        <LocationItemLink locationName={locationName} isActive={isActive}/>
      </div>) : (
      <li className="locations__item">
        <LocationItemLink locationName={locationName} isActive={isActive}/>
      </li>)
  );
}

export default LocationsItem;
