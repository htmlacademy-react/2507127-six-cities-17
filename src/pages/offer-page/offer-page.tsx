import Header from '../../components/header/header';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { PagesList } from '../../const';

type OfferPageProps = {
  galleryImagesCount: number;
}

function OfferPage({galleryImagesCount}: OfferPageProps): JSX.Element{
  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery GalleryImagesCount={galleryImagesCount}/>
          <OfferInfo/>
          <Map mapClass='offer'/>
        </section>
        <div className="container">
          <NearPlaces cardsCount={3}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
