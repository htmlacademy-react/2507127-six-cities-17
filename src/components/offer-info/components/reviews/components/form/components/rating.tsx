import { memo } from 'react';
import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import StarsList from './stars-list';

type RatingProps = {
  onHandleRatingChange: onHandleRatingChangeType;
  rating: null | number;
}

function RatingTemplate({onHandleRatingChange, rating}: RatingProps):JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      <StarsList rating={rating} onHandleRatingChange={onHandleRatingChange}/>
    </div>
  );
}

const Rating = memo(RatingTemplate);

export default Rating;
