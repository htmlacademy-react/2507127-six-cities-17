import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import { ReviewComment } from '../../../../types/comments';
import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';
import styles from './reviews.module.css';
import { useAppSelector } from '../../../../hooks';
import { selectAuthorizationStatus, selectIsCommentsLoading, selectOfferComments } from '../../../../store/selectors';
import LoadingScreen from '../../../common/loading-screen/loading-screen';


function NeedToLogin(): JSX.Element{
  return (
    <div className={styles.loginWrapper}>
      Please &nbsp;
      <Link to={AppRoute.Login} className={styles.loginLink}>log in</Link>
      &nbsp; to be able to write a review
    </div>
  );
}

function Reviews():JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isCommentsLoading = useAppSelector(selectIsCommentsLoading);
  const offerComments = useAppSelector(selectOfferComments) as ReviewComment[];

  if (isCommentsLoading) {
    return <LoadingScreen isRelative/>;
  }

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
