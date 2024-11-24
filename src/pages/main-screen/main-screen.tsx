import Header from '../../components/header/header';
import LocationsTabsList from '../../components/locations-tabs/locations-tabs-list';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import PlacesSortForm from '../../components/places-sort-form/places-sort-form';

type MainScreenProps = {
  cardsCount: number;
}

function MainScreen({cardsCount}: MainScreenProps): JSX.Element{


  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabsList/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              {<PlacesSortForm/>}
              {<PlaceCardsList cardsCount={cardsCount}/>}

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
