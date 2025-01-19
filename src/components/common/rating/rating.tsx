import { GeneralCategory } from '../../../const';
import { RatingSettings } from './rating-settings';

type RatingProps = {
  ratingClass: GeneralCategory;
  rating?: number;
}

function Rating({ratingClass, rating}: RatingProps):JSX.Element{
  const starsStyle = rating && {width: `${20 * rating}%`};

  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={starsStyle || RatingSettings[ratingClass].style}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {RatingSettings[ratingClass].ratingValue &&
      <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
