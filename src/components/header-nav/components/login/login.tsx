import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import Avatar from '../avatar/avatar';
import { useAppDispatch } from '../../../../hooks';
import { logoutAction } from '../../../../store/api-actions';

type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

function Login({authorizationStatus}: LoginProps):JSX.Element{
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  const authorized = authorizationStatus === AuthorizationStatus.Auth;
  const isPrivatePage = pathname === String(AppRoute.Favorites);
  const logoutRoute = isPrivatePage ? AppRoute.Index : pathname;
  const route = authorized ? logoutRoute : AppRoute.Login;

  const handleLinkLogout = () => {
    if (authorized) {
      dispatch(logoutAction());
    }
  };

  return(
    <li className="header__nav-item">
      <Link onClick={handleLinkLogout} className="header__nav-link" to={route}>
        {!authorized && <Avatar/>}
        <span className="header__signout">Sign {authorized ? 'out' : 'in'}</span>
      </Link>
    </li>
  );
}

export default Login;
