import { nanoid } from 'nanoid';
import { ratingGradation } from '../../../../../../../const';
import Star from './star';

function Rating():JSX.Element {

  //Использовал вместо map, так как нужны индексы в обратном порядке
  function createStarsList(): JSX.Element[]{
    const stars = [];
    for(let i = ratingGradation.length; i >= 1; i--) {
      stars.push(<Star num={i} gradation={ratingGradation[i]} key={nanoid()}/>);
    }
    return stars;
  }

  return (
    <div className="reviews__rating-form form__rating">
      {createStarsList()}
    </div>
  );
}

export default Rating;
