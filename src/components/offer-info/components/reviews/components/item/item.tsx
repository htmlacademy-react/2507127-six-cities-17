import ReviewsInfo from './components/info/info';
import ReviewsUser from './components/user/user';

function Item():JSX.Element{
  return (
    <li className="reviews__item">
      <ReviewsUser/>
      <ReviewsInfo/>
    </li>
  );
}

export default Item;
