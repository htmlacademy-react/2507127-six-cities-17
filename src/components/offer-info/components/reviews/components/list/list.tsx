import ReviewsItem from '../item/item';

function List():JSX.Element{
  return (
    <ul className="reviews__list">
      <ReviewsItem/>
    </ul>
  );
}

export default List;
