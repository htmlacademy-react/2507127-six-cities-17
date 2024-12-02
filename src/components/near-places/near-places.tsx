import { nanoid } from 'nanoid';
import PlaceCardItem from '../place-card-item/place-card-item';

type NearPlacesProps = {
  cardsCount: number;
}

function NearPlaces({cardsCount}: NearPlacesProps):JSX.Element{
  const cardsList = Array.from({length: cardsCount}).map(() => <PlaceCardItem cardClass='near-places' key={nanoid()}/>);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">
  Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {cardsList}
      </div>
    </section>
  );
}

export default NearPlaces;
