import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import comments from './mocks/comments';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthStatus, fetchOffersAction } from './store/api-actions';
import { initLocalStorage } from './services/local-storage';
import ErrorMessage from './components/error-message/error-message';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

checkAuthStatus();
store.dispatch(fetchOffersAction());
//Забираем данные из localStorage и помещаем в хранилище, если они есть
initLocalStorage();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
