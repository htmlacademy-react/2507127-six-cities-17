import { nanoid } from 'nanoid';
import { ratingGradation } from '../../../../../../../const';
import Star from './star';
import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { FormReviewType } from '../../../../../../../types/types';

type StarsListProps = {
  onHandleRatingChange: onHandleRatingChangeType;
  formData: FormReviewType;
}

function StarsList({onHandleRatingChange, formData}: StarsListProps): JSX.Element[]{
  const stars = [];
  //Использовал вместо map, так как нужны индексы в обратном порядке
  for(let i = ratingGradation.length; i >= 1; i--) {
    stars.push(<Star formData={formData} onHandleRatingChange={onHandleRatingChange} num={i} gradation={ratingGradation[i]} key={nanoid()}/>);
  }
  return stars;
}

export default StarsList;
