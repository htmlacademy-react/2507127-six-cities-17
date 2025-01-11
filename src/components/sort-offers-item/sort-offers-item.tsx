import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { SortOption } from '../../const';
import { selectCurrentSortOffers } from '../../store/offers-process/selectors';
import { changeSortOffers } from '../../store/offers-process/offers-process';

type SortOffersItemProps = {
  sortOption: string;
}

function SortOffersItem({sortOption}: SortOffersItemProps):JSX.Element {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectCurrentSortOffers);
  const handleSortChange = () => {
    dispatch(changeSortOffers(sortOption as SortOption));
  };

  return (
    <li onClick={handleSortChange} className={cn(
      'places__option',
      {'places__option--active': String(sortOption) === String(currentSort)}
    )} tabIndex={0}
    >
      {sortOption}
    </li>
  );
}

export default SortOffersItem;
