import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import Avatar from '../avatar/avatar';

type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

function Login({authorizationStatus}: LoginProps):JSX.Element{
  const authorized = authorizationStatus === AuthorizationStatus.Auth;

  return(
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login}>
        {!authorized && <Avatar/>}
        <span className="header__signout">Sign {authorized ? 'out' : 'in'}</span>
      </Link>
    </li>
  );
}

export default Login;
