import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/selectors';
import User from './components/user/user';
import Login from './components/login/login';
import { AuthorizationStatus } from '../../const';

function HeaderNav(): JSX.Element{
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const authorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorized && <User/>}
        <Login authorizationStatus={authorizationStatus}/>
      </ul>
    </nav>
  );
}

export default HeaderNav;
