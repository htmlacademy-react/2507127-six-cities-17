import ReviewsForm from './info-reviews-components/reviews-form/reviews-form';
import ReviewsList from './info-reviews-components/reviews-list/reviews-list';

function InfoReviews():JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ReviewsList/>
      <ReviewsForm/>
    </section>
  );
}

export default InfoReviews;
