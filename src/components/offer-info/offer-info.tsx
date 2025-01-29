import Mark from '../common/mark/mark';
import Host from './components/host/host';
import Rating from '../common/rating/rating';
import Inside from './components/inside/inside';
import Features from './components/features/features';
import Name from './components/name/name';
import Price from './components/price/price';
import Reviews from './components/reviews/reviews';
import { FullOffer } from '../../types/offers';
import { GeneralCategory } from '../../const';

import Description from './components/description/description';

type OfferInfoProps = {
  offer: FullOffer;
}

function OfferInfo({offer}: OfferInfoProps):JSX.Element{
  const {
    id,
    title,
    price,
    rating,
    isPremium,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    isFavorite
  } = offer;

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium && <Mark markClass={GeneralCategory.Offer}/>}
        <Name isFavorite={isFavorite} offerId={id} title={title} />
        <Rating rating={rating} ratingClass={GeneralCategory.Offer}/>
        <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
        <Price price={price}/>
        <Inside goods={goods}/>
        <Host host={host}/>
        <Description description={description}/>
        <Reviews />
      </div>
    </div>
  );
}

export default OfferInfo;
