import { memo } from 'react';
import Logo from '../common/logo/logo';

function FooterTemplate():JSX.Element {
  return (
    <footer className="footer">
      <Logo logoClass='footer'/>
    </footer>
  );
}

const Footer = memo(FooterTemplate);

export default Footer;
