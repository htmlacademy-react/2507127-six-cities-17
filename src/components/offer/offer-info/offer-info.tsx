import Mark from '../../common/mark/mark';
import OfferInfoHost from './offer-info-components/info-host/info-host';
import Rating from '../../common/rating/rating';
import OfferInfoInside from './offer-info-components/info-inside/info-inside';
import OfferInfoFeatures from './offer-info-components/info-features/info-features';
import OfferInfoName from './offer-info-components/info-name/info-name';
import OfferInfoPrice from './offer-info-components/info-price/info-price';
import InfoReviews from './offer-info-components/info-reviews/info-reviews';


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
