import { useState } from 'react';
import SortOffersList from '../sort-offers-list/sort-offers-list';
import { useAppSelector } from '../../hooks';

function PlacesSortForm(): JSX.Element{
  const currentSort = useAppSelector((state) => state.currentSortOffers);
  const [showSort, setShowSort] = useState(false);
  const handleCloseSort = () => setShowSort(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setShowSort((prev) => !prev)} className="places__sorting-type" tabIndex={0}>
      &nbsp;{currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortOffersList handlerCloseSort={handleCloseSort} showSort={showSort}/>
    </form>

  );
}

export default PlacesSortForm;
