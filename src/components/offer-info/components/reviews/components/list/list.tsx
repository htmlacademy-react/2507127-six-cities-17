import { ReviewComment } from '../../../../../../types/comments';
import ReviewsItem from '../item/item';

type ListProps = {
  comments: ReviewComment[];
}

function List({comments}: ListProps):JSX.Element{
  const commentsList = comments.map((comment)=> <ReviewsItem comment={comment} key={comment.user.name}/>);
  return (
    <ul className="reviews__list">
      {commentsList}
    </ul>
  );
}

export default List;
