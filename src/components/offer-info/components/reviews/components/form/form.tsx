import { ChangeEvent, useState } from 'react';
import ButtonWrapper from './components/button-wrapper';
import Label from './components/label';
import Rating from './components/rating';
import Text from './components/text';
import { FormReviewType } from '../../../../../../types/types';
import { FormReviewValue } from '../../../../../../const';

function Form():JSX.Element {
  const initialState: FormReviewType = {
    rating: null,
    review: ''
  };


  const [formData, setFormData] = useState<FormReviewType>(initialState);

  const isDisabled = formData.rating !== null
  && formData.review.length > FormReviewValue.Min
  && formData.review.length < FormReviewValue.Max;

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=>({
      ...prev,
      rating: Number(evt.target.value)
    }));
  };
  const handleChangeReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev)=>({
      ...prev,
      review: evt.target.value
    }));
  };
  const handleSubmitForm = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <Label/>
      <Rating formData={formData} onHandleRatingChange={handleChangeRating}/>
      <Text formData={formData} onHandleChangeReview={handleChangeReview}/>
      <ButtonWrapper isDisabled={isDisabled}/>
    </form>
  );
}

export default Form;
