import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AuthorizationStatus, AppRoute, Settings } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppProps): JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Index}>
            <Route index element={<MainPage cardsCount={cardsCount} offersCount={offersCount}/>}/>
            <Route
              path={AppRoute.Login}
              element={<LoginPage/>}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage galleryImagesCount={Settings.GalleryImagesCount}/>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage/>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
