import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import comments from './mocks/comments';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { initLocalStorage } from './services/local-storage';
import { ToastContainer } from 'react-toastify';
import { TIMEOUT_SHOW_ERROR } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
//Забираем данные из localStorage и помещаем в хранилище, если они есть
initLocalStorage();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={TIMEOUT_SHOW_ERROR}/>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
