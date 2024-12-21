import cn from 'classnames';
import SortOffersItem from '../sort-offers-item/sort-offers-item';
import { SortOption } from '../../const';

type SortOffersListProps = {
  showSort: boolean;
  closeSort: () => void;
}

function SortOffersList({showSort, closeSort}: SortOffersListProps):JSX.Element {
  const sortOptionList = Object.values(SortOption).map((option) => <SortOffersItem sortOption={option} closeSort={closeSort} key={option}/>);

  return (
    <ul className={cn(
      'places__options',
      'places__options--custom',
      {'places__options--opened': showSort}
    )}
    >
      {sortOptionList}
    </ul>
  );
}

export default SortOffersList;
