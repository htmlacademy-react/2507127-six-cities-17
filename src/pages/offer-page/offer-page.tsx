import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { AuthorizationStatus, GeneralCategory, PagesList } from '../../const';
import { OffersData } from '../../types/offers';
import { ReviewComment } from '../../types/comments';
import Map from '../../components/map/map';
import { getNearOffers } from '../../utils/offers';
import { useAppSelector } from '../../hooks';
import { selectOffers } from '../../store/selectors';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
  comments: ReviewComment[];
  galleryImagesCount: number;
}

function OfferPage({authorizationStatus, comments, galleryImagesCount, }: OfferPageProps): JSX.Element{
  const offers = useAppSelector(selectOffers);
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
          <OfferInfo authorizationStatus={authorizationStatus} comments={comments} offer={currentOffer as OffersData}/>
          <Map mapClass={GeneralCategory.Offer} offers={nearOffers as OffersData[]}/>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers as OffersData[]}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
