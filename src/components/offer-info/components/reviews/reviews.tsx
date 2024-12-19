import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import { ReviewComment } from '../../../../types/comments';
import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';
import styles from './reviews.module.css';

type ReviewsProps = {
  authorizationStatus: AuthorizationStatus;
  comments: ReviewComment[];
}

function NeedToLogin(): JSX.Element{
  return (
    <div className={styles.loginWrapper}>
      Please &nbsp;
      <Link to={AppRoute.Login} className={styles.loginLink}>log in</Link>
      &nbsp; to be able to write a review
    </div>
  );
}

function Reviews({authorizationStatus, comments}: ReviewsProps):JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments}/>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <ReviewsForm/>
        : <NeedToLogin/>}
    </section>
  );
}

export default Reviews;
