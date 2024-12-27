import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import comments from './mocks/comments';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import { initLocalStorage } from './services/local-storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
//Забираем данные из localStorage и помещаем в хранилище, если они есть
initLocalStorage();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
