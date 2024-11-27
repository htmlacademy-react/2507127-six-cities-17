// import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';


// type AppProps = {
//   cardsCount: number;
//   offersCount: number;
//   GalleryImagesCount: number;
// }

// function App({cardsCount, offersCount}: AppProps): JSX.Element{
//   return (
//     <MainPage cardsCount={cardsCount} offersCount={offersCount}/>
//   );
// }

type AppProps = {
  galleryImagesCount: number;
}

function App({galleryImagesCount}: AppProps): JSX.Element{
  return (
    <OfferPage galleryImagesCount={galleryImagesCount}/>
  );
}

export default App;
