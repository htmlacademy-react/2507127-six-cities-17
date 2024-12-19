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
import { useState } from 'react';

type AppProps = {
  offers: OffersData[];
  comments: ReviewComment[];
}

function App({offers, comments}: AppProps): JSX.Element{
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) =>{
    setActiveOfferId(id);
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Routes>
            <Route path={AppRoute.Index}>
              <Route index element={<MainPage offers={offers} activeOfferId={activeOfferId} onHandleActiveOfferChange={handleActiveOfferChange}/>}/>
              <Route
                path={AppRoute.Login}
                element={<LoginPage/>}
              />
              <Route
                path={AppRoute.Offer}
                element={<OfferPage authorizationStatus={AuthorizationStatus.NoAuth} offers={offers} comments={comments} activeOfferId={activeOfferId} galleryImagesCount={Settings.GalleryImagesCount}/>}
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
