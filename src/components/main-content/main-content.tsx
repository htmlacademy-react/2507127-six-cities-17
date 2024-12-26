import cn from 'classnames';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks';
import { selectCity, selectCurrentSortOffers, selectOffers } from '../../store/selectors';
import { getFilteredOffers } from '../../utils/offers';
import { sortOffers } from '../../utils/sort';

function MainContent():JSX.Element {
  const currentCity = useAppSelector(selectCity);
  const currentSort = useAppSelector(selectCurrentSortOffers);

  const offers = useAppSelector(selectOffers);
  const filteredOFfers = getFilteredOffers(offers, currentCity);
  const sortedOffers = sortOffers(filteredOFfers, currentSort);

  return (
    <main className={cn(
      'page__main',
      'page__main--index',
      {'page__main--index-empty': !sortedOffers.length}
    )}
    >
      <h1 className="visually-hidden">Cities</h1>
      <LocationsList currentCity={currentCity} />
      <Cities filteredOFfers={sortedOffers} currentCity={currentCity}/>
    </main>
  );
}

export default MainContent;
