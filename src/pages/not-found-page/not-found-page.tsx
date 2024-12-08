import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { PagesList, AppRoute } from '../../const';
import styles from './not-found-page.module.css';
import Title from '../../components/title/title';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Title pageName={PagesList.NotFound}/>
      <Header/>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404: Not Found</h1>
        <Link
          className={styles.link}
          to={AppRoute.Index}
        >
          Go to Home page
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
