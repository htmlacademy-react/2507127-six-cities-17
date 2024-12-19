import { generatePath, Link } from 'react-router-dom';
import BookmarkButton from '../common/bookmark-button/bookmark-button';
import Mark from '../common/mark/mark';
import Rating from '../common/rating/rating';
import { PlaceCardSettings } from './place-card-settings';
import { AppRoute, GeneralCategory } from '../../const';
import { ActiveOfferChange } from '../../types/handlers';
import { OffersData } from '../../types/offers';

type PlaceCardItemProps = {
  offer: OffersData;
  cardClass: GeneralCategory;
  onHandleActiveOfferChange?: ActiveOfferChange;
}

function PlaceCardItem({offer, cardClass, onHandleActiveOfferChange}: PlaceCardItemProps): JSX.Element{
  const {
    id,
    title,
    type,
    price,
    previewImage,
    rating,
    isPremium,
    isFavorite
  } = offer;

  return (
    <article
      className={`${cardClass}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange && onHandleActiveOfferChange(id)}
      onMouseLeave={() => onHandleActiveOfferChange && onHandleActiveOfferChange(null)}
    >
      {isPremium && <Mark markClass={GeneralCategory.PlaceCard}/>}
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img className='place-card__image' src={previewImage} width={PlaceCardSettings[cardClass].width} height={PlaceCardSettings[cardClass].height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${isFavorite ? 'favorites__card-info' : ''}place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} bookmarkClass={GeneralCategory.PlaceCard}/>
        </div>
        <Rating ratingClass={GeneralCategory.PlaceCard} rating={rating}/>
        <h2 className='place-card__name'>
          <Link to={generatePath(AppRoute.Offer, {id})}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default PlaceCardItem;
