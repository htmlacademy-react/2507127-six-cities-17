import { onhandleChangeReviewType } from '../../../../../../../types/handlers';
import { FormReviewType } from '../../../../../../../types/types';


type TextProps ={
  onHandleChangeReview: onhandleChangeReviewType;
  formData: FormReviewType;
}

function Text({onHandleChangeReview, formData}: TextProps):JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onHandleChangeReview}
      value={formData.review}
    />
  );
}

export default Text;
