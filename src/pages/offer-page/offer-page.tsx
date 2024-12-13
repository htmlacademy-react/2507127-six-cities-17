import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { GeneralCategories, PagesList } from '../../const';
import { OffersData } from '../../types/offers';

type OfferPageProps = {
  offers: OffersData[];
  nearOffers: OffersData[];
  galleryImagesCount: number;
}

function OfferPage({galleryImagesCount, offers, nearOffers}: OfferPageProps): JSX.Element{
  const {id} = useParams();
  const currentOffer = offers.find((item) => item.id === id);

  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery GalleryImagesCount={galleryImagesCount}/>
          <OfferInfo offer={currentOffer as OffersData}/>
          <Map mapClass={GeneralCategories.Offer}/>
        </section>
        <div className="container">
          <NearPlaces nearOffers={nearOffers}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
