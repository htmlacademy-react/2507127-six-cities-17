import BookmarkButton from '../../bookmark-button/bookmark-button';
import Mark from '../../common/mark/mark';
import Rating from '../../common/rating/rating';
import { PlaceCardSettings } from './place-card-settings';

type PlaceCardItemProps = {
  cardClass: string;
  isPremium?: boolean;
  isFavorites?: boolean;
}

function PlaceCardItem({cardClass, isPremium = true, isFavorites = false}: PlaceCardItemProps): JSX.Element{
  return (
    <article className={`${cardClass}__card place-card`}>
      {isPremium && <Mark markClass='place-card'/>}
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className='place-card__image' src="img/apartment-01.jpg" width={PlaceCardSettings[cardClass].width} height={PlaceCardSettings[cardClass].height} alt="Place image"/>
        </a>
      </div>
      <div className={`${isFavorites ? 'favorites__card-info' : ''}place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;120</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkButton bookmarkClass='place-card'/>
        </div>
        <Rating ratingClass='place-card'/>
        <h2 className='place-card__name'>
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className='place-card__type'>Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCardItem;
