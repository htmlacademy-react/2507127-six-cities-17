import { onhandleChangeReviewType } from '../../../../../../../types/handlers';

type TextProps ={
  onHandleChangeReview: onhandleChangeReviewType;
  reviewText: string;
  isDisabled: boolean;
}

function Text({isDisabled, onHandleChangeReview, reviewText}: TextProps):JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onHandleChangeReview}
      value={reviewText}
      disabled={isDisabled}
    />
  );
}

export default Text;
