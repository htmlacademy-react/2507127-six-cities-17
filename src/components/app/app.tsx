import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTopWrapper from '../scroll-to-top-wrapper/scroll-to-top-wrapper';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../common/loading-screen/loading-screen';
import { selectIsOffersDataLoading } from '../../store/app-data/app-data.selectors';
import HistoryRouter from '../history-route/history-router';
import browserHistory from '../../browser-history';


function App(): JSX.Element{
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);

  if (isOffersDataLoading) {
    return <LoadingScreen/>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTopWrapper>
          <Routes>
            <Route path={AppRoute.Index}>
              <Route index element={<MainPage/>}/>
              <Route
                path={AppRoute.Login}
                element={
                  <PrivateRoute isLoginPage>
                    <LoginPage/>
                  </PrivateRoute>
                }
              />
              <Route
                path={AppRoute.Offer}
                element={<OfferPage />}
              />
              <Route
                path={AppRoute.Favorites}
                element={
                  <PrivateRoute>
                    <FavoritesPage />
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
