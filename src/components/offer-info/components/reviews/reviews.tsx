import ReviewsForm from './components/form/form';
import ReviewsList from './components/list/list';

function Reviews():JSX.Element {
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

export default Reviews;
