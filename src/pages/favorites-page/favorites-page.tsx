import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { PagesList } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectOffers } from '../../store/app-data/selectors';


function FavoritesPage(): JSX.Element{
  const offers = useAppSelector(selectOffers);

  return (
    <div className="page">
      <Title pageName={PagesList.Favorite}/>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
