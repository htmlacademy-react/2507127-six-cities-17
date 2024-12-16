import Mark from '../common/mark/mark';
import Host from './components/host/host';
import Rating from '../common/rating/rating';
import Inside from './components/inside/inside';
import Features from './components/features/features';
import Name from './components/name/name';
import Price from './components/price/price';
import Reviews from './components/reviews/reviews';
import { OffersData } from '../../types/offers';
import { GeneralCategories } from '../../const';

type OfferInfoProps = {
  offer: OffersData;
}

function OfferInfo({offer}: OfferInfoProps):JSX.Element{
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
        {isPremium && <Mark markClass={GeneralCategories.Offer}/>}
        <Name title={title} isFavorite={isFavorite}/>
        <Rating rating={rating} ratingClass={GeneralCategories.Offer}/>
        <Features/>
        <Price price={price}/>
        <Inside/>
        <Host/>
        <Reviews/>
      </div>
    </div>
  );
}

export default OfferInfo;
