import { useAppSelector } from '../../hooks';
import { selectError } from '../../store/selectors';
import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(selectError);

  return (error)
    ? <div className={styles.errorMessage}>{error}</div>
    : null;
}

export default ErrorMessage;
