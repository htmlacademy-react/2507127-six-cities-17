import { Link } from 'react-router-dom';
import { LogoSettings } from './logo-settings';
import { AppRoute } from '../../../const';
import { memo } from 'react';

type LogoProps = {
  logoClass?: string;
}

function LogoTemplate({logoClass = 'header'}: LogoProps):JSX.Element {
  return (
    <Link className={`${logoClass}__logo-link`} to={AppRoute.Index}>
      <img
        className={`${logoClass}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoSettings[logoClass].width}
        height={LogoSettings[logoClass].height}
      />
    </Link>
  );
}

const Logo = memo(LogoTemplate);

export default Logo;
