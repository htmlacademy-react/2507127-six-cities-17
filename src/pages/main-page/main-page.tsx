import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import PlacesSortForm from '../../components/places-sort-form/places-sort-form';
import Header from '../../components/header/header';
import { GeneralCategories, PagesList } from '../../const';
import Title from '../../components/title/title';
import { OffersData } from '../../types/offers';
import { getAllCities, getCurrentCityData, getSelectedPonit, getFilteredOffers, getPointsData } from '../../utils/offers';

type MainPageProps = {
  offers: OffersData[];
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

function MainPage({offers}: MainPageProps): JSX.Element{
  const allCities = getAllCities(offers);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState(allCities[0]);

  const filteredOFfers = getFilteredOffers(offers, currentLocation);
  const currentCityData = getCurrentCityData(filteredOFfers);
  const pointsData = getPointsData(filteredOFfers);
  const selectedPoint = activeOfferId !== null ? getSelectedPonit(filteredOFfers, activeOfferId) : null;

  //временная функция
  function returnActiveOffer(offer: string | null): string | null{
    return offer;
  }

  const handleActiveOfferChange = (id: string | null) =>{
    returnActiveOffer(activeOfferId);
    setActiveOfferId(id);
  };

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
              {<PlaceCardsList onHandleActiveOfferChange={handleActiveOfferChange} offers={filteredOFfers}/>}
            </section>
            <div className="cities__right-section">
              <Map city={currentCityData} points={pointsData} selectedPoint={selectedPoint} mapClass={GeneralCategories.Cities}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
