import { useAppSelector } from '../../hooks';

type FoundPlacesNumber = {
  offersCount: number;
}

function FoundPlacesNumber({offersCount}: FoundPlacesNumber):JSX.Element{
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <b className="places__found">{offersCount} places to stay in {currentCity}</b>
  );
}

export default FoundPlacesNumber;
