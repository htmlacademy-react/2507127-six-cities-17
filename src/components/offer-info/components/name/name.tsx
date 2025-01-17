import { GeneralCategory } from '../../../../const';
import BookmarkButton from '../../../common/bookmark-button/bookmark-button';

type NameProps = {
  title: string;
  offerId: string;
}

function Name({title, offerId}:NameProps):JSX.Element{
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <BookmarkButton offerId={offerId} bookmarkClass={GeneralCategory.Offer}/>
    </div>
  );
}

export default Name;
