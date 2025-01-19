import styles from './avatar.module.css';

type AvatarProps = {
  avatar?: string;
}

function Avatar({avatar}: AvatarProps): JSX.Element {
  return (
    <div className="header__avatar-wrapper user__avatar-wrapper">
      {avatar && <img src={avatar} alt="" className={styles.avatar}/>}
    </div>
  );
}

export default Avatar;
