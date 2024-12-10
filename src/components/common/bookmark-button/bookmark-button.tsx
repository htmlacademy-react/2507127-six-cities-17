import { BookmarkSettings } from './bookmark-settings';

type BookmarkButtonProps = {
  bookmarkClass: string;
  isFavorite: boolean;
}

function BookmarkButton({bookmarkClass, isFavorite}: BookmarkButtonProps): JSX.Element{
  const isActive = isFavorite
    ? `${bookmarkClass}__bookmark-button--active`
    : null;
  return (
    <button className={`${bookmarkClass}__bookmark-button ${isActive} button`} type="button">
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkSettings[bookmarkClass].width} height={BookmarkSettings[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
