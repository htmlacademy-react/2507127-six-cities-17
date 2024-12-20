import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import PlacesSortForm from '../../components/places-sort-form/places-sort-form';
import Header from '../../components/header/header';
import { GeneralCategory, PagesList } from '../../const';
import Title from '../../components/title/title';
import { getFilteredOffers} from '../../utils/offers';
import { ActiveOfferChange } from '../../types/handlers';
import { useAppSelector } from '../../hooks';

type MainPageProps = {
  activeOfferId: string | null;
  onHandleActiveOfferChange: ActiveOfferChange;
}

type FoundPlacesNumber = {
  offersCount: number;
  currentCity: string;
}

function FoundPlacesNumber({offersCount, currentCity}: FoundPlacesNumber):JSX.Element{
  return (
    <b className="places__found">{offersCount} places to stay in {currentCity}</b>
  );
}

function MainPage({activeOfferId, onHandleActiveOfferChange}: MainPageProps): JSX.Element{
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);

  const filteredOFfers = getFilteredOffers(offers, currentCity);

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList currentCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <FoundPlacesNumber currentCity={currentCity} offersCount={filteredOFfers.length}/>
              {<PlacesSortForm/>}
              {<PlaceCardsList onHandleActiveOfferChange={onHandleActiveOfferChange} offers={filteredOFfers}/>}
            </section>
            <div className="cities__right-section">
              <Map mapClass={GeneralCategory.Cities} offers={filteredOFfers} activeOfferId={activeOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
