import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/offers-process/offers-process.slice';
import { useCallback, useMemo } from 'react';
import { selectCity } from '../../store/offers-process/offers-process.selectors';
import LocationItemLink from '../location-item-link/location-item-link';

type LocationItemLinkProps = {
  city: string;
}

function LocationItemLinkWrapper({city}: LocationItemLinkProps): JSX.Element{
  const dispatch = useAppDispatch();
  const handleCityChange = useCallback(() => dispatch(changeCity(city)), [dispatch, city]);
  const currentCity = useAppSelector(selectCity);
  const isActive = useMemo(() => city === currentCity, [city, currentCity]);

  return (
    <LocationItemLink city={city} isActive={isActive} onCityChange={handleCityChange}/>
  );
}

export default LocationItemLinkWrapper;
