import { MAX_REVIEWS } from '../../../../../../const';
import { ReviewComment } from '../../../../../../types/comments';
import { getSortedComments } from '../../../../../../utils/comments';
import ReviewsItem from '../item/item';

type ListProps = {
  comments: ReviewComment[];
}

function List({comments}: ListProps):JSX.Element{
  const sortedComments = getSortedComments(comments, MAX_REVIEWS);
  const commentsList = sortedComments.map((comment)=> <ReviewsItem comment={comment} key={comment.id}/>);
  return (
    <ul className="reviews__list">
      {commentsList}
    </ul>
  );
}

export default List;
