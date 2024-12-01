type LocationsItemProps = {
  locationName: string;
  isActive?: boolean;
  isSingle?: boolean;
}

type LocationItemLinkProps = Omit<LocationsItemProps, 'isSingle'>

function LocationItemLink({locationName, isActive}: LocationItemLinkProps): JSX.Element{
  return (
    <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
      <span>{locationName}</span>
    </a>
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
