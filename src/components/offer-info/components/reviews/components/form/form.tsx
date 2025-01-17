import { ChangeEvent, useCallback, useState } from 'react';
import ButtonWrapper from './components/button-wrapper';
import Label from './components/label';
import Rating from './components/rating';
import Text from './components/text';
import { FormReviewType } from '../../../../../../types/types';
import { FormReviewValue } from '../../../../../../const';
import { useAppDispatch } from '../../../../../../hooks';
import { fetchOfferCommentsAction, postOfferCommentAction } from '../../../../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { PostReviewComment } from '../../../../../../types/comments';

function Form():JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const [disableForm, setDisableForm] = useState<boolean>(false);

  const initialState: FormReviewType = {
    rating: null,
    review: ''
  };

  const [formData, setFormData] = useState<FormReviewType>(initialState);

  const isDisabled = formData.rating !== null
  && formData.review.length > FormReviewValue.Min
  && formData.review.length < FormReviewValue.Max;

  const handleChangeRating = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev)=>({
      ...prev,
      rating: Number(evt.target.value)
    }));
  }, []);
  const handleChangeReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev)=>({
      ...prev,
      review: evt.target.value
    }));
  };
  const handleSubmitForm = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setDisableForm(true);
    const {rating, review: comment} = formData;
    const data = {id, rating, comment} as PostReviewComment;

    dispatch(postOfferCommentAction(data))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setFormData(initialState);
          dispatch(fetchOfferCommentsAction(id as string));
        }
      })
      .finally(() => {
        setDisableForm(false);
      });
  };

  return (
    <form onSubmit={handleSubmitForm} action="#" method="post">
      <fieldset className="reviews__form form" disabled={disableForm} style={{border:'none'}}>
        <Label/>
        <Rating formData={formData} onHandleRatingChange={handleChangeRating}/>
        <Text formData={formData} onHandleChangeReview={handleChangeReview}/>
        <ButtonWrapper isDisabled={isDisabled}/>
      </fieldset>
    </form>
  );
}

export default Form;
