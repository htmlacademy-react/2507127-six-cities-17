import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AuthorizationStatus, RoutePath, Settings } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { OffersData } from '../../types/offers';

type AppProps = {
  offers: OffersData[];
}

function App({offers}: AppProps): JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.INDEX}>
            <Route index element={<MainPage offers={offers} />}/>
            <Route
              path={RoutePath.LOGIN}
              element={<LoginPage/>}
            />
            <Route
              path={RoutePath.OFFER}
              element={<OfferPage offers={offers} galleryImagesCount={Settings.GalleryImagesCount}/>}
            />
            <Route
              path={RoutePath.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage/>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={RoutePath.NOT_FOUND}
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
