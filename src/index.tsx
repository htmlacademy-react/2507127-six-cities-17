import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavoriteOffersAction, fetchOffersAction } from './store/api-actions';
import { initLocalStorage } from './services/local-storage';
import { toast, ToastContainer } from 'react-toastify';
import { TIMEOUT_SHOW_ERROR } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction())
  //Тесты ругаются на ошибку, если использовать unwrap
  .then((response) => {
    if (response.meta.requestStatus === 'fulfilled') {
      store.dispatch(fetchFavoriteOffersAction());
    }
  });

store.dispatch(fetchOffersAction())
  .then((response) => {
    if (response.meta.requestStatus === 'rejected') {
      toast.warn('Unable to access server');
    }
  });
//Забираем данные из localStorage и помещаем в хранилище, если они есть
initLocalStorage();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={TIMEOUT_SHOW_ERROR}/>
      <App/>
    </Provider>
  </React.StrictMode>
);
