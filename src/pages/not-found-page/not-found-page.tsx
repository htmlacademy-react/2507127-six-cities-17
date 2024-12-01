import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { RoutePath } from '../../const';
import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404: Not Found</h1>
        <Link
          className={styles.link}
          to={RoutePath.INDEX}
        >
          Go to Home page
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
