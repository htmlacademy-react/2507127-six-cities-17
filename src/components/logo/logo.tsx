import { LogoSettings } from './logo-settings';

type LogoProps = {
  logoClass: string;
}

function Logo({logoClass}: LogoProps):JSX.Element {
  return (
    <a className={`${logoClass}__logo-link`} href="main.html">
      <img
        className={`${logoClass}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoSettings[logoClass].width}
        height={LogoSettings[logoClass].height}
      />
    </a>
  );
}

export default Logo;
