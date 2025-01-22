import { memo } from 'react';
import { onHandleRatingChangeType } from '../../../../../../../types/handlers';

type InputProps = {
  starNumber: number;
  gradation: string;
  onHandleRatingChange: onHandleRatingChangeType;
  rating: null | number;
}

function StarTemplate({starNumber, gradation, onHandleRatingChange, rating}: InputProps):JSX.Element {
  const isChecked = !!(rating && starNumber <= rating);
  const starColor = isChecked ? '#ff9000' : '#c7c7c7';

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={starNumber}
        id={`${starNumber}-stars`}
        type="radio"
        onChange={onHandleRatingChange}
      />
      <label
        htmlFor={`${starNumber}-stars`}
        className="reviews__rating-label form__rating-label"
        title={gradation}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" fill={starColor}/>
        </svg>
      </label>
    </>
  );
}

const Star = memo(StarTemplate);

export default Star;
