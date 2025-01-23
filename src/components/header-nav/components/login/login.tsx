import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import Avatar from '../avatar/avatar';
import { useAppDispatch } from '../../../../hooks';
import { logoutAction } from '../../../../store/api-actions';
import { redirectToRoute } from '../../../../store/action';

type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

function Login({authorizationStatus}: LoginProps):JSX.Element{
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  const authorized = authorizationStatus === AuthorizationStatus.Auth;
  const isPrivatePage = pathname === String(AppRoute.Favorites);
  const route = authorized ? pathname : AppRoute.Login;

  const handleLinkLogout = () => {
    if (authorized) {
      dispatch(logoutAction())
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled' && isPrivatePage) {
            dispatch(redirectToRoute(AppRoute.Login));
          }
        });
    }
  };

  return(
    <li className="header__nav-item">
      <Link onClick={handleLinkLogout} className="header__nav-link header__nav-link--profile" to={route}>
        {!authorized && <Avatar/>}
        <span className={authorized ? 'header__signout' : 'header__login'}>{authorized ? 'Sign out' : 'Sign in'}</span>
      </Link>
    </li>
  );
}

export default Login;
