import { FormReviewValue } from '../../../../../../../const';
import Button from './button';

type ButtonWrapperType = {
  isDisabled: boolean;
}

function ButtonWrapper({isDisabled}: ButtonWrapperType):JSX.Element {
  return(
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
                  To submit review please make sure to set{' '}
        <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
        <b className="reviews__text-amount">{FormReviewValue.Min} characters</b>.
      </p>
      <Button isDisabled={isDisabled}/>
    </div>
  );
}

export default ButtonWrapper;
