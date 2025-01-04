import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { useEffect } from 'react';
import { selectCity } from '../../store/selectors';

type LocationsItemProps = {
  city: string;
  isActive?: boolean;
  isSingle?: boolean;
}

type LocationItemLinkProps = Omit<LocationsItemProps, 'isSingle'>

function LocationItemLink({city, isActive}: LocationItemLinkProps): JSX.Element{
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectCity);
  const handleCityChange = () => dispatch(changeCity(city));

  //Не удалось понять как сохранить данные в localStorage через redux-thunk. Воспользовался useEffect
  useEffect(() => {
    localStorage.setItem('currentCity', JSON.stringify(currentCity));
  },[currentCity]);

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
