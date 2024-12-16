import { ReviewUser } from '../../../../../../../../types/comments';

type UserProps = {
  user: ReviewUser;
}

function User({user}: UserProps):JSX.Element {
  const {name, avatarUrl} = user;
  return (
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={avatarUrl}
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{name}</span>
    </div>
  );
}

export default User;
