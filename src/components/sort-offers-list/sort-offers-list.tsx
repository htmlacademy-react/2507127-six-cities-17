import { nanoid } from 'nanoid';
import SortOffersItem from '../sort-offers-item/sort-offers-item';
import { SortOptions } from '../../const';

function SortOffersList():JSX.Element {
  const sortOptionsList = Object.values(SortOptions).map((option) => <SortOffersItem sortOption={option} isActive={option === 'Popular'} key={nanoid()}/>);

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortOptionsList}
    </ul>
  );
}

export default SortOffersList;
