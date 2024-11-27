import MainPage from '../../pages/main-page/main-page';
// import OfferPage from '../../pages/offer-page/offer-page';


type AppProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppProps): JSX.Element{
  return (
    <MainPage cardsCount={cardsCount} offersCount={offersCount}/>
  );
}

// function App(): JSX.Element{
//   return (
//     <OfferPage/>
//   );
// }

export default App;
