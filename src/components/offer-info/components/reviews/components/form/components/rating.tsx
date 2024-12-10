import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { FormReviewType } from '../../../../../../../types/types';
import StarsList from './stars-list';

type RatingProps = {
  onHandleRatingChange: onHandleRatingChangeType;
  formData: FormReviewType;
}

function Rating({onHandleRatingChange, formData}: RatingProps):JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      <StarsList formData={formData} onHandleRatingChange={onHandleRatingChange}/>
    </div>
  );
}

export default Rating;
