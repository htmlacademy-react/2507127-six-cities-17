import { GeneralCategory } from '../../../../const';
import BookmarkButton from '../../../common/bookmark-button/bookmark-button';

type NameProps = {
  title: string;
  isFavorite: boolean;
}

function Name({title, isFavorite}:NameProps):JSX.Element{
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {title}
      </h1>
      <BookmarkButton isFavorite={isFavorite} bookmarkClass={GeneralCategory.Offer}/>
    </div>
  );
}

export default Name;
