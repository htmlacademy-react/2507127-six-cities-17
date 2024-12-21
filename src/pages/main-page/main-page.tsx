import LocationsList from '../../components/locations-list/locations-list';
import Header from '../../components/header/header';
import { PagesList } from '../../const';
import Title from '../../components/title/title';
import { ActiveOfferChange } from '../../types/handlers';
import { useAppSelector } from '../../hooks';
import Cities from '../../components/cities/cities';

type MainPageProps = {
  activeOfferId: string | null;
  onHandleActiveOfferChange: ActiveOfferChange;
}

function MainPage({activeOfferId, onHandleActiveOfferChange}: MainPageProps): JSX.Element{
  const currentCity = useAppSelector((state) => state.currentCity);

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList currentCity={currentCity} />
        <Cities activeOfferId={activeOfferId} currentCity={currentCity} onHandleActiveOfferChange={onHandleActiveOfferChange}/>
      </main>
    </div>
  );
}

export default MainPage;
