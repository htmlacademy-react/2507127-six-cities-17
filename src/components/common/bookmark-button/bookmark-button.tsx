import { GeneralCategories } from '../../../const';
import { BookmarkSettings } from './bookmark-settings';
import cn from 'classnames';

type BookmarkButtonProps = {
  bookmarkClass: GeneralCategories;
  isFavorite: boolean;
}

function BookmarkButton({bookmarkClass, isFavorite}: BookmarkButtonProps): JSX.Element{
  return (
    <button className={
      cn(
        `${bookmarkClass}__bookmark-button`,
        'button',
        {[`${bookmarkClass}__bookmark-button--active`]: isFavorite}
      )
    } type="button"
    >
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkSettings[bookmarkClass].width} height={BookmarkSettings[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
