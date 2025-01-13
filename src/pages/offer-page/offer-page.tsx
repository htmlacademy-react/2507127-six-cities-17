import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { PagesList } from '../../const';
import OfferPageContent from '../../components/offer-page-content/offer-page-content';
import { useOfferInfo } from '../../hooks/use-offer-info';
import NotFoundPage from '../not-found-page/not-found-page';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';
import { selectIsNearbyOffersLoading, selectIsOfferLoading, selectOffer } from '../../store/app-data/app-data.selectors';

function OfferPage(): JSX.Element{
  const isOfferLoading = useAppSelector(selectIsOfferLoading);
  const isNearbyOffersLoading = useAppSelector(selectIsNearbyOffersLoading);
  const currentOffer = useAppSelector(selectOffer);

  const [slicedNearbyOffers] = useOfferInfo();

  if (isOfferLoading || isNearbyOffersLoading) {
    return <LoadingScreen />;
  }

  if (!currentOffer) {
    return <NotFoundPage/>;
  }

  return (
    <div className="page">
      <Title pageName={PagesList.Offer}/>
      <Header/>
      <OfferPageContent currentOffer={currentOffer} nearbyOffers={slicedNearbyOffers}/>
    </div>
  );
}

export default OfferPage;
