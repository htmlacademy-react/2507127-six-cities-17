import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationItemLinkTemplateProps = {
  city: string;
  isActive: boolean;
  onCityChange: () => void;
}

function LocationItemLinkTemplate({city, isActive, onCityChange}: LocationItemLinkTemplateProps): JSX.Element {
  return (
    <Link onClick={onCityChange} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={AppRoute.Index}>
      <span>{city}</span>
    </Link>
  );
}

const LocationItemLink = memo(LocationItemLinkTemplate);

export default LocationItemLink;
