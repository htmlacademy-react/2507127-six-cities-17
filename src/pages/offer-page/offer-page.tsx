import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { GeneralCategory, PagesList } from '../../const';
import { OffersData } from '../../types/offers';
import { ReviewComment } from '../../types/comments';
import { ActiveOfferChange } from '../../types/handlers';
import Map from '../../components/map/map';
import { getNearOffers } from '../../utils/offers';

type OfferPageProps = {
  offers: OffersData[];
  comments: ReviewComment[];
  activeOfferId: string | null;
  onHandleActiveOfferChange: ActiveOfferChange;
  galleryImagesCount: number;
}

function OfferPage({ offers, comments, activeOfferId, onHandleActiveOfferChange, galleryImagesCount, }: OfferPageProps): JSX.Element{
  const {id} = useParams();

  const currentOffer = offers.find((item) => item.id === id);
  const nearOffers = getNearOffers(offers, id);

  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery GalleryImagesCount={galleryImagesCount}/>
          <OfferInfo comments={comments} offer={currentOffer as OffersData}/>
          <Map mapClass={GeneralCategory.Offer} activeOfferId={activeOfferId} offers={nearOffers as OffersData[]}/>
        </section>
        <div className="container">
          <NearPlaces onHandleActiveOfferChange={onHandleActiveOfferChange} offers={nearOffers as OffersData[]}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
