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

type OfferPageProps = {
  offers: OffersData[];
  nearOffers: OffersData[];
  comments: ReviewComment[];
  activeOfferId: string | null;
  onHandleActiveOfferChange: ActiveOfferChange;
  galleryImagesCount: number;
}

function OfferPage({ offers, nearOffers, comments, activeOfferId, onHandleActiveOfferChange, galleryImagesCount, }: OfferPageProps): JSX.Element{
  const {id} = useParams();
  //Пришлось добавить условие, так как приложение ломалось при нажатии на предложение неподалеку
  const currentOffer = offers.find((item) => item.id === id) || nearOffers.find((item) => item.id === id);

  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery GalleryImagesCount={galleryImagesCount}/>
          <OfferInfo comments={comments} offer={currentOffer as OffersData}/>
          <Map mapClass={GeneralCategory.Offer} activeOfferId={activeOfferId} offers={nearOffers}/>
        </section>
        <div className="container">
          <NearPlaces onHandleActiveOfferChange={onHandleActiveOfferChange} nearOffers={nearOffers}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
