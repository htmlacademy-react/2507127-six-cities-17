import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function User():JSX.Element{
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
        </span>
        <span className="header__favorite-count">3</span>
      </Link>
    </li>
  );
}

function Login():JSX.Element{
  return(
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

function HeaderNav(): JSX.Element{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <User/>
        <Login/>
      </ul>
    </nav>
  );
}

export default HeaderNav;
