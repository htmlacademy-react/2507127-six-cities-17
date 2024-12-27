import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { changeSortOffers } from '../../store/action';
import { SortOption } from '../../const';
import { selectCurrentSortOffers } from '../../store/selectors';
import { useEffect } from 'react';

type SortOffersItemProps = {
  sortOption: string;
}

function SortOffersItem({sortOption}: SortOffersItemProps):JSX.Element {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectCurrentSortOffers);
  const handleSortChange = () => {
    dispatch(changeSortOffers(sortOption as SortOption));
  };

  useEffect(() => {
    localStorage.setItem('currentSortOffers', JSON.stringify(currentSort));
  }, [currentSort]);

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
