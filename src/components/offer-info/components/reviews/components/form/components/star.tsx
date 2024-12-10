import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { FormReviewType } from '../../../../../../../types/types';

type InputProps = {
  num: number;
  gradation: string;
  onHandleRatingChange: onHandleRatingChangeType;
  formData: FormReviewType;
}

function Star({num, gradation, onHandleRatingChange, formData}: InputProps):JSX.Element {
  const isChecked = !!(formData.rating && num <= formData.rating);
  const starColor = isChecked ? '#ff9000' : '#c7c7c7';

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={num}
        id={`${num}-stars`}
        type="radio"
        onChange={onHandleRatingChange}
      />
      <label
        htmlFor={`${num}-stars`}
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
