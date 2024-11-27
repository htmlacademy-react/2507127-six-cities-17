import FavoritesList from '../../components/favorites/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import HeaderGeneral from '../../components/header/header-general/header-general';

function FavoritesPage(): JSX.Element{
  return (
    <div className="page">
      <HeaderGeneral/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
