import { Link } from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';
import { RoutePath } from '../../../const';


type HeaderGeneralProps = {
  isLoginPage?: boolean;
}

function HeaderLogo(): JSX.Element {
  return (
    <Link className="header__logo-link" to={RoutePath.INDEX}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </Link>
  );
}

function HeaderGeneral({isLoginPage = false}: HeaderGeneralProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo/>
          </div>
          {!isLoginPage && <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default HeaderGeneral;
