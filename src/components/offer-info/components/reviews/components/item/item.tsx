import { ReviewComment } from '../../../../../../types/comments';
import Info from './components/info/info';
import User from './components/user/user';

type ItemProps = {
  comment: ReviewComment;
}

function Item({comment}: ItemProps):JSX.Element{
  const {user} = comment;
  return (
    <li className="reviews__item">
      <User user={user}/>
      <Info comment={comment}/>
    </li>
  );
}

export default Item;
