import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { FormReviewType } from '../../../../../../../types/types';

type InputProps = {
  starNumber: number;
  gradation: string;
  onHandleRatingChange: onHandleRatingChangeType;
  formData: FormReviewType;
}

function Star({starNumber, gradation, onHandleRatingChange, formData}: InputProps):JSX.Element {
  const isChecked = !!(formData.rating && starNumber <= formData.rating);
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

export default Star;
