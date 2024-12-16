import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import PlacesSortForm from '../../components/places-sort-form/places-sort-form';
import Header from '../../components/header/header';
import { GeneralCategory, PagesList } from '../../const';
import Title from '../../components/title/title';
import { OffersData } from '../../types/offers';
import { getAllCities, getFilteredOffers} from '../../utils/offers';
import { ActiveOfferChange } from '../../types/handlers';

type MainPageProps = {
  offers: OffersData[];
  activeOfferId: string | null;
  onHandleActiveOfferChange: ActiveOfferChange;
}

type FoundPlacesNumber = {
  offersCount: number;
  currentLocation: string;
}

function FoundPlacesNumber({offersCount, currentLocation}: FoundPlacesNumber):JSX.Element{
  return (
    <b className="places__found">{offersCount} places to stay in {currentLocation}</b>
  );
}

function MainPage({offers, activeOfferId, onHandleActiveOfferChange}: MainPageProps): JSX.Element{
  const allCities = getAllCities(offers);

  const [currentLocation, setCurrentLocation] = useState(allCities[0]);

  const filteredOFfers = getFilteredOffers(offers, currentLocation);

  const handleCurrentLocationChange = (name: string) =>{
    setCurrentLocation(name);
  };

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList currentLocation={currentLocation} onHandleCurrentLocationChange={handleCurrentLocationChange} cities={allCities}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <FoundPlacesNumber currentLocation={currentLocation} offersCount={filteredOFfers.length}/>
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
