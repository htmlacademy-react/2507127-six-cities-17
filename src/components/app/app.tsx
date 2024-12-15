import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AuthorizationStatus, AppRoute, Settings } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { OffersData } from '../../types/offers';
import ScrollToTopWrapper from '../scroll-to-top-wrapper/scroll-to-top-wrapper';
import { ReviewComment } from '../../types/comments';

type AppProps = {
  offers: OffersData[];
  nearOffers: OffersData[];
  comments: ReviewComment[];
}

function App({offers, nearOffers, comments}: AppProps): JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Routes>
            <Route path={AppRoute.Index}>
              <Route index element={<MainPage offers={offers} />}/>
              <Route
                path={AppRoute.Login}
                element={<LoginPage/>}
              />
              <Route
                path={AppRoute.Offer}
                element={<OfferPage offers={offers} nearOffers={nearOffers} comments={comments} galleryImagesCount={Settings.GalleryImagesCount}/>}
              />
              <Route
                path={AppRoute.Favorites}
                element={
                  <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                    <FavoritesPage offers={offers}/>
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path={AppRoute.NotFound}
              element={<NotFoundPage/>}
            />
          </Routes>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
