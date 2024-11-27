import ReviewsInfo from './reviews-item-components/reviews-info/reviews-info';
import ReviewsUser from './reviews-item-components/reviews-user/reviews-user';

function ReviewsItem():JSX.Element{
  return (
    <li className="reviews__item">
      <ReviewsUser/>
      <ReviewsInfo/>
    </li>
  );
}

export default ReviewsItem;
