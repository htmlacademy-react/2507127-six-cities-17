import HeaderNav from '../header-nav/header-nav';


type HeaderProps = {
  isLoginPage?: boolean;
}

function HeaderLogo(): JSX.Element {
  return (
    <a className="header__logo-link" href="main.html">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </a>
  );
}

function Header({isLoginPage = false}: HeaderProps): JSX.Element {
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

export default Header;
