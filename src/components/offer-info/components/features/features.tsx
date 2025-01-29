import { getCapitalizedWord } from '../../../../utils/common';

type FeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function Features({type, bedrooms, maxAdults}: FeaturesProps): JSX.Element{
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{getCapitalizedWord(type)}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedroom{ bedrooms > 1 ? 's' : ''}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adult{ maxAdults > 1 ? 's' : ''}
      </li>
    </ul>
  );
}

export default Features;
