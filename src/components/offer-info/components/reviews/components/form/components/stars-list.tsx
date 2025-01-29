import { nanoid } from 'nanoid';
import { ratingNames } from '../../../../../../../const';
import Star from './star';
import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { useMemo } from 'react';

type StarsListProps = {
  onHandleRatingChange: onHandleRatingChangeType;
  rating: null | number;
}

function StarsList({onHandleRatingChange, rating}: StarsListProps): JSX.Element[]{
  const starsToRender = useMemo(() => {
    const stars = [];
    //Использовал вместо map, так как нужны индексы в обратном порядке
    for(let i = ratingNames.length; i >= 1; i--) {
      stars.push(<Star rating={rating} onHandleRatingChange={onHandleRatingChange} starNumber={i} gradation={ratingNames[i - 1]} key={nanoid()}/>);
    }
    return stars;
  }, [onHandleRatingChange, rating]);

  return starsToRender;
}

export default StarsList;
