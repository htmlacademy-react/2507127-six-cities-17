import Rating from '../../../../../../../../common/rating/rating';

function ReviewsInfo():JSX.Element {
  return (
    <div className="reviews__info">
      <Rating ratingClass={'reviews'}/>
      <p className="reviews__text">
                A quiet cozy and picturesque that hides behind a a river by
                the unique lightness of Amsterdam. The building is green and
                from 18th century.
      </p>
      <time className="reviews__time" dateTime="2019-04-24">
                April 2019
      </time>
    </div>
  );
}

export default ReviewsInfo;
