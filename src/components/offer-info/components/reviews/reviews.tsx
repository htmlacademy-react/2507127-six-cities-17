import { AuthorizationStatus } from '../../../../const';
import { ReviewComment } from '../../../../types/comments';
import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';
import { useAppSelector } from '../../../../hooks';
import NeedToLogin from '../../../need-to-login/need-to-login';
import { selectAuthorizationStatus } from '../../../../store/user-process/user-process.selectors';
import { selectOfferComments } from '../../../../store/comment-process/comment-process.selectors';

function Reviews():JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const offerComments = useAppSelector(selectOfferComments) as ReviewComment[];

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{offerComments.length}</span>
      </h2>
      <ReviewsList comments={offerComments}/>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <ReviewsForm/>
        : <NeedToLogin/>}
    </section>
  );
}

export default Reviews;
