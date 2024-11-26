import { nanoid } from 'nanoid';
import PlaceCardItem from '../place-card-item/place-card-item';

type PlaceCardsListProps = {
  cardsCount: number;
}

function PlaceCardsList({cardsCount}: PlaceCardsListProps): JSX.Element{
  const cardsList = Array.from({length: cardsCount}).map(() => <PlaceCardItem key={nanoid()}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
