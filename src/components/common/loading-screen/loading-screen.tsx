import styles from './loading-screen.module.css';

type LoadingScreenProps = {
  isRelative?: boolean;
}

function LoadingScreen({isRelative = false}: LoadingScreenProps): JSX.Element {
  return (
    <div className={styles.container} style={{position: isRelative ? 'relative' : 'absolute'}}>
      <div className={styles.spinnerWrapper}>
        <img className={styles.spinner} src="img/spinner.png" alt="loading..."/>
      </div>
    </div>
  );
}

export default LoadingScreen;
