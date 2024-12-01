import { nanoid } from 'nanoid';
import { OfferInsideItems } from '../../../../const';

type InsideItemProps = {
  itemName: string;
}

function InsideItem({itemName}: InsideItemProps):JSX.Element{
  return (<li className="offer__inside-item">{itemName}</li>);
}

function Inside():JSX.Element{
  const insideItems = Object.values(OfferInsideItems).map((name)=> <InsideItem key={nanoid()} itemName={name}/>);

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {insideItems}
      </ul>
    </div>
  );
}

export default Inside;
