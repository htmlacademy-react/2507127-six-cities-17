import Logo from '../../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderGeneralProps = {
  isLoginPage?: boolean;
}

function HeaderGeneral({isLoginPage = false}: HeaderGeneralProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoClass='header'/>
          </div>
          {!isLoginPage && <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default HeaderGeneral;
