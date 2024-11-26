import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Settings} from './const';
import MockData from './mock-data/mock-data';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount = {Settings.CardsCount}
      offersCount = {MockData.length}
    />
  </React.StrictMode>
);
