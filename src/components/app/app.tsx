import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppProps): JSX.Element{
  return (
    <MainPage cardsCount={cardsCount} offersCount={offersCount}/>
  );
}

export default App;
