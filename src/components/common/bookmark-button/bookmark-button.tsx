import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, GeneralCategory } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { BookmarkSettings } from './bookmark-settings';
import cn from 'classnames';
import { selectAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { useMemo, useState } from 'react';
import { uploadFavoriteStatusAction } from '../../../store/api-actions';

type BookmarkButtonProps = {
  bookmarkClass: GeneralCategory;
  offerId: string;
  isFavorite: boolean;
}

function BookmarkButton({bookmarkClass, offerId, isFavorite}: BookmarkButtonProps): JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const isAuthorized = useMemo(() => authStatus === AuthorizationStatus.Auth, [authStatus]);

  const handleButtonClick = () => {
    if(isAuthorized) {
      setDisableButton(true);
      dispatch(uploadFavoriteStatusAction({offerId, isFavorite}))
        .finally(() => {
          setDisableButton(false);
        });
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button disabled={disableButton} className={
      cn(
        `${bookmarkClass}__bookmark-button`,
        'button',
        {[`${bookmarkClass}__bookmark-button--active`]: isFavorite && isAuthorized}
      )
    }
    onClick={handleButtonClick}
    type="button"
    >
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkSettings[bookmarkClass].width} height={BookmarkSettings[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite && isAuthorized ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
