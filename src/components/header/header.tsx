import Logo from '../common/logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  isLoginPage?: boolean;
}

function Header({isLoginPage = false}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {!isLoginPage && <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
