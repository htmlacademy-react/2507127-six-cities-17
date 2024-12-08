import { Helmet } from 'react-helmet-async';
import { SITE_NAME } from '../../const';

type TitleProps = {
  pageName: string;
}

function Title({pageName}: TitleProps):JSX.Element{
  return (
    <Helmet>
      <title>{`${SITE_NAME}: ${pageName}`}</title>
    </Helmet>
  );
}

export default Title;
