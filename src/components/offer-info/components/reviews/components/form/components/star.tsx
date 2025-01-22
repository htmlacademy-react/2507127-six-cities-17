import { memo, useMemo } from 'react';
import { onHandleRatingChangeType } from '../../../../../../../types/handlers';
import { useAppSelector } from '../../../../../../../hooks';
import { selectIsCommentAdding } from '../../../../../../../store/comment-process/comment-process.selectors';

type InputProps = {
  starNumber: number;
  gradation: string;
  onHandleRatingChange: onHandleRatingChangeType;
  rating: null | number;
}

function StarTemplate({starNumber, gradation, onHandleRatingChange, rating}: InputProps):JSX.Element {
  const isChecked = useMemo(() => !!(rating && starNumber === rating), [rating, starNumber]);
  const isCommentLoading = useAppSelector(selectIsCommentAdding);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        value={starNumber}
        id={`${starNumber}-stars`}
        type="radio"
        onChange={onHandleRatingChange}
        checked={isChecked}
        disabled={isCommentLoading}
      />
      <label
        htmlFor={`${starNumber}-stars`}
        className="reviews__rating-label form__rating-label"
        title={gradation}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

const Star = memo(StarTemplate);

export default Star;
