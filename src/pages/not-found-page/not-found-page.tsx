import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { RoutePath } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header/>
      <div style={{marginTop: '25%', textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem'}}>404: Not Found</h1>
        <Link
          style={{fontSize: '2rem', textDecoration: 'underline'}}
          to={RoutePath.INDEX}
        >
          Go to Home page
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
