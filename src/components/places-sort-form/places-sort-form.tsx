import { useState } from 'react';
import SortOffersList from '../sort-offers-list/sort-offers-list';

function PlacesSortForm(): JSX.Element{
  const [showOptions, setShowOptions] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setShowOptions((prev) => !prev)} className="places__sorting-type" tabIndex={0}>
      &nbsp;Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortOffersList showOptions={showOptions}/>
    </form>

  );
}

export default PlacesSortForm;
