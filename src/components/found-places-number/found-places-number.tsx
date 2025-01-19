import { useAppSelector } from '../../hooks';
import { selectCity } from '../../store/offers-process/offers-process.selectors';

type FoundPlacesNumber = {
  offersCount: number;
}

function FoundPlacesNumber({offersCount}: FoundPlacesNumber):JSX.Element{
  const currentCity = useAppSelector(selectCity);

  return (
    <b className="places__found">{offersCount} places to stay in {currentCity}</b>
  );
}

export default FoundPlacesNumber;
