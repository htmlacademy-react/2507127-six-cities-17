import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-process/offers-process';

type LocationsItemProps = {
  city: string;
  isActive?: boolean;
  isSingle?: boolean;
}

type LocationItemLinkProps = Omit<LocationsItemProps, 'isSingle'>

function LocationItemLink({city, isActive}: LocationItemLinkProps): JSX.Element{
  const dispatch = useAppDispatch();
  const handleCityChange = () => dispatch(changeCity(city));

  return (
    <Link onClick={handleCityChange} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={AppRoute.Index}>
      <span>{city}</span>
    </Link>
  );
}

function LocationsItem({city, isActive = true, isSingle = false}: LocationsItemProps): JSX.Element{
  return (
    isSingle ? (
      <div className="locations__item">
        <LocationItemLink city={city} isActive={isActive}/>
      </div>) : (
      <li className="locations__item">
        <LocationItemLink city={city} isActive={isActive}/>
      </li>)
  );
}

export default LocationsItem;
