import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { changeSortOffers } from '../../store/action';
import { SortOption } from '../../const';

type SortOffersItemProps = {
  sortOption: string;
}

function SortOffersItem({sortOption}: SortOffersItemProps):JSX.Element {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.currentSortOffers);
  const onSortChange = () => {
    dispatch(changeSortOffers(sortOption as SortOption));
  };

  return (
    <li onClick={onSortChange} className={cn(
      'places__option',
      {'places__option--active': String(sortOption) === String(currentSort)}
    )} tabIndex={0}
    >
      {sortOption}
    </li>
  );
}

export default SortOffersItem;
