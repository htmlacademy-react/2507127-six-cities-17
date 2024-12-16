import { GeneralCategories } from '../../../const';
import { RatingSettings } from './rating-settings';

type RatingProps = {
  ratingClass: GeneralCategories;
  rating?: number;
}

function Rating({ratingClass, rating}: RatingProps):JSX.Element{
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={RatingSettings[ratingClass].style} />
        <span className="visually-hidden">Rating</span>
      </div>
      {RatingSettings[ratingClass].ratingValue &&
      <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
