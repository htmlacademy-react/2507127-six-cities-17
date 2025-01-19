import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './need-to-login.module.css';

function NeedToLogin(): JSX.Element{
  return (
    <div className={styles.loginWrapper}>
      Please &nbsp;
      <Link to={AppRoute.Login} className={styles.loginLink}>log in</Link>
      &nbsp; to be able to write a review
    </div>
  );
}

export default NeedToLogin;
