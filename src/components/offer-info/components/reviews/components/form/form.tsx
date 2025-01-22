import { ChangeEvent, useCallback, useState } from 'react';
import ButtonWrapper from './components/button-wrapper';
import Label from './components/label';
import Rating from './components/rating';
import Text from './components/text';
import { FormReviewType } from '../../../../../../types/types';
import { FormReviewValue } from '../../../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { postOfferCommentAction } from '../../../../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { PostReviewComment } from '../../../../../../types/comments';
import { selectIsCommentAdding } from '../../../../../../store/comment-process/comment-process.selectors';

function Form():JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const initialState: FormReviewType = {
    rating: null,
    review: ''
  };

  const [formData, setFormData] = useState<FormReviewType>(initialState);

  const isCommentLoading = useAppSelector(selectIsCommentAdding);
  const isReviewValid = formData.rating !== null
  && formData.review.length > FormReviewValue.Min
  && formData.review.length < FormReviewValue.Max;
  const isDisabled = !isReviewValid || isCommentLoading;

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
    const {rating, review: comment} = formData;
    const data = {id, rating, comment} as PostReviewComment;

    dispatch(postOfferCommentAction(data))
      .then((resolve) => {
        if(resolve.meta.requestStatus === 'fulfilled'){
          setFormData(initialState);
        }
      });
  };

  return (
    <form className="reviews__form form" style={{border:'none'}} onSubmit={handleSubmitForm} action="#" method="post">
      <Label/>
      <Rating rating={formData.rating} onHandleRatingChange={handleChangeRating}/>
      <Text isDisabled={isCommentLoading} reviewText={formData.review} onHandleChangeReview={handleChangeReview}/>
      <ButtonWrapper isDisabled={isDisabled}/>
    </form>
  );
}

export default Form;
