import { nanoid } from 'nanoid';
import cn from 'classnames';
import SortOffersItem from '../sort-offers-item/sort-offers-item';
import { SortOptions } from '../../const';

type SortOffersListProps = {
  showOptions: boolean;
}

function SortOffersList({showOptions}: SortOffersListProps):JSX.Element {
  const sortOptionsList = Object.values(SortOptions).map((option) => <SortOffersItem sortOption={option} isActive={option === 'Popular'} key={nanoid()}/>);

  return (
    <ul className={cn(
      'places__options',
      'places__options--custom',
      {'places__options--opened': showOptions}
    )}
    >
      {sortOptionsList}
    </ul>
  );
}

export default SortOffersList;
