import { ReviewComment } from '../../../../types/comments';
import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';

type ReviewsProps = {
  comments: ReviewComment[];
}

function Reviews({comments}: ReviewsProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments}/>
      <ReviewsForm/>
    </section>
  );
}

export default Reviews;
