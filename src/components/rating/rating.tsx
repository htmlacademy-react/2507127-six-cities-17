import { RatingSettings } from './rating-settings';

type RatingProps = {
  ratingClass: string;
}

function Rating({ratingClass}: RatingProps):JSX.Element{
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={RatingSettings[ratingClass].style} />
        <span className="visually-hidden">Rating</span>
      </div>
      {RatingSettings[ratingClass].ratingValue &&
      <span className="offer__rating-value rating__value">4.8</span>}
    </div>
  );
}

export default Rating;
