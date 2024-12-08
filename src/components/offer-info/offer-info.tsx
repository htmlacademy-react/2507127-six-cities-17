import Mark from '../common/mark/mark';
import OfferInfoHost from './components/host/host';
import Rating from '../common/rating/rating';
import OfferInfoInside from './components/inside/inside';
import OfferInfoFeatures from './components/features/features';
import OfferInfoName from './components/name/name';
import OfferInfoPrice from './components/price/price';
import InfoReviews from './components/reviews/reviews';

function OfferInfo():JSX.Element{
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        <Mark markClass='offer'/>
        <OfferInfoName/>
        <Rating ratingClass='offer'/>
        <OfferInfoFeatures/>
        <OfferInfoPrice/>
        <OfferInfoInside/>
        <OfferInfoHost/>
        <InfoReviews/>
      </div>
    </div>
  );
}

export default OfferInfo;
