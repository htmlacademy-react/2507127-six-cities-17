import { useEffect, useRef, useState } from 'react';
import SortOffersList from '../sort-offers-list/sort-offers-list';
import { useAppSelector } from '../../hooks';
import { selectCurrentSortOffers } from '../../store/offers-process/selectors';

function PlacesSortForm(): JSX.Element{
  const sortSpanRef = useRef<HTMLElement>(null);
  const currentSort = useAppSelector(selectCurrentSortOffers);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    const closeSortList = (evt: MouseEvent) => {
      const isElmentExists = evt.target instanceof HTMLElement && sortSpanRef.current;
      if (isElmentExists && !sortSpanRef.current.contains(evt.target)){
        setShowSort(false);
      }
    };

    document.addEventListener('click', closeSortList);

    return () => document.removeEventListener('click', closeSortList);
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        ref={sortSpanRef}
        onClick={() => setShowSort((prev) => !prev)}
        tabIndex={0}
      >
      &nbsp;{currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortOffersList showSort={showSort}/>
    </form>

  );
}

export default PlacesSortForm;
