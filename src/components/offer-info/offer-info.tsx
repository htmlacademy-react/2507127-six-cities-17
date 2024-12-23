import Mark from '../common/mark/mark';
import Host from './components/host/host';
import Rating from '../common/rating/rating';
import Inside from './components/inside/inside';
import Features from './components/features/features';
import Name from './components/name/name';
import Price from './components/price/price';
import Reviews from './components/reviews/reviews';
import { OffersData } from '../../types/offers';
import { AuthorizationStatus, GeneralCategory } from '../../const';
import { ReviewComment } from '../../types/comments';

type OfferInfoProps = {
  authorizationStatus: AuthorizationStatus;
  offer: OffersData;
  comments: ReviewComment[];
}

function OfferInfo({authorizationStatus, offer, comments}: OfferInfoProps):JSX.Element{
  const {
    title,
    price,
    rating,
    isPremium,
    isFavorite,
  } = offer;
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium && <Mark markClass={GeneralCategory.Offer}/>}
        <Name title={title} isFavorite={isFavorite}/>
        <Rating rating={rating} ratingClass={GeneralCategory.Offer}/>
        <Features/>
        <Price price={price}/>
        <Inside/>
        <Host/>
        <Reviews authorizationStatus={authorizationStatus} comments={comments}/>
      </div>
    </div>
  );
}

export default OfferInfo;
