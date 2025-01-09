import { AuthorizationStatus } from '../../../../const';
import { ReviewComment } from '../../../../types/comments';
import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';
import { useAppSelector } from '../../../../hooks';
import { selectAuthorizationStatus, selectIsCommentsLoading, selectOfferComments } from '../../../../store/selectors';
import LoadingScreen from '../../../common/loading-screen/loading-screen';
import NeedToLogin from '../../../need-to-login/need-to-login';

function Reviews():JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isCommentsLoading = useAppSelector(selectIsCommentsLoading);
  const offerComments = useAppSelector(selectOfferComments) as ReviewComment[];

  return (
    <section className="offer__reviews reviews">
      {
        isCommentsLoading
          ? <LoadingScreen isRelative/>
          :
          <>
            <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{offerComments.length}</span>
            </h2>
            <ReviewsList comments={offerComments}/>
            {authorizationStatus === AuthorizationStatus.Auth
              ? <ReviewsForm/>
              : <NeedToLogin/>}
          </>
      }
    </section>
  );
}

export default Reviews;
