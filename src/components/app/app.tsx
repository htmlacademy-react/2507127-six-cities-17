import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { RoutePath, Settings } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainPage cardsCount={cardsCount} offersCount={offersCount}/>}/>
          <Route
            path={RoutePath.LOGIN}
            element={<LoginPage/>}
          />
          <Route
            path={RoutePath.OFFER}
            element={<OfferPage galleryImagesCount={Settings.GalleryImagesCount}/>}
          />
          <Route
            path={RoutePath.FAVORITES}
            element={<FavoritesPage/>}
          />
          <Route
            path={RoutePath.NOT_FOUND}
            element={<NotFoundPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
