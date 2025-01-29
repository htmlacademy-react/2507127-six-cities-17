import { GeneralCategory } from '../../../../const';
import BookmarkButton from '../../../common/bookmark-button/bookmark-button';

type NameProps = {
  title: string;
  offerId: string;
  isFavorite: boolean;
}

function Name({title, offerId, isFavorite}:NameProps):JSX.Element{
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <BookmarkButton isFavorite={isFavorite} offerId={offerId} bookmarkClass={GeneralCategory.Offer}/>
    </div>
  );
}

export default Name;
