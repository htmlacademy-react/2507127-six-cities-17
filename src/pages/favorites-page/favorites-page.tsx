import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { PagesList } from '../../const';
import { useAppSelector } from '../../hooks';
import cn from 'classnames';
import { selectFavoriteOffers, selectIsFavoriteOffersLoading } from '../../store/favorite-process/favorite-process.selectors';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';


function FavoritesPage(): JSX.Element{
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const isFavoritesLoading = useAppSelector(selectIsFavoriteOffersLoading);

  if (isFavoritesLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={
      cn(
        'page',
        {'page--favorites-empty': !favoriteOffers.length}
      )
    }
    >
      <Title pageName={PagesList.Favorite}/>
      <Header/>
      <main className={
        cn(
          'page__main',
          'page__main--favorites',
          {'page__main--favorites-empty': !favoriteOffers.length}
        )
      }
      >
        <div className="page__favorites-container container">
          <section className={
            cn(
              'favorites',
              {'favorites--empty': !favoriteOffers.length}
            )
          }
          >
            {
              !favoriteOffers.length
                ? <FavoritesEmpty/>
                : <FavoritesList offers={favoriteOffers}/>
            }
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
