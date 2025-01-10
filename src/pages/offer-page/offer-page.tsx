import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { GeneralCategory, PagesList } from '../../const';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { selectIsNearbyOffersLoading, selectIsOfferLoading} from '../../store/selectors';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import { useOfferInfo } from '../../hooks/use-offer-info';

function OfferPage(): JSX.Element{
  const isOfferLoading = useAppSelector(selectIsOfferLoading);
  const isNearbyOffersLoading = useAppSelector(selectIsNearbyOffersLoading);

  const [currentOffer, slicedNearbyOffers] = useOfferInfo();

  if (isOfferLoading || isNearbyOffersLoading) {
    return <LoadingScreen/>;
  }

  if (!currentOffer) {
    return <NotFoundPage/>;
  }

  const {images} = currentOffer;

  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <OfferInfo offer={currentOffer}/>
          <Map mapClass={GeneralCategory.Offer} offers={slicedNearbyOffers}/>
        </section>
        <div className="container">
          <NearPlaces offers={slicedNearbyOffers}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
