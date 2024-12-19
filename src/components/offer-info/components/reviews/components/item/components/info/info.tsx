import { GeneralCategory } from '../../../../../../../../const';
import { ReviewComment } from '../../../../../../../../types/comments';
import { getFormattedDate } from '../../../../../../../../utils/comments';
import Rating from '../../../../../../../common/rating/rating';

type InfoProps = {
  comment: ReviewComment;
}

function Info({comment}: InfoProps):JSX.Element {
  const {comment: text, date} = comment;

  const formattedDate = getFormattedDate(date);
  return (
    <div className="reviews__info">
      <Rating ratingClass={GeneralCategory.Reviews}/>
      <p className="reviews__text">
        {text}
      </p>
      <time className="reviews__time" dateTime={date}>
        {formattedDate}
      </time>
    </div>
  );
}

export default Info;
