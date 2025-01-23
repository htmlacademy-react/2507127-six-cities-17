import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { PagesList } from '../../const';
import OfferPageContent from '../../components/offer-page-content/offer-page-content';
import { useOfferInfo } from '../../hooks/use-offer-info';
import NotFoundPage from '../not-found-page/not-found-page';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';
import { selectIsNearbyOffersLoading, selectIsOfferLoading, selectOffer } from '../../store/app-data/app-data.selectors';
import { useEffect } from 'react';
import { changeActiveOfferId } from '../../store/offers-process/offers-process.slice';
import { selectIsCommentsLoading } from '../../store/comment-process/comment-process.selectors';

function OfferPage(): JSX.Element{
  const dispatch = useAppDispatch();
  const isOfferLoading = useAppSelector(selectIsOfferLoading);
  const isCommentsLoading = useAppSelector(selectIsCommentsLoading);
  const isNearbyOffersLoading = useAppSelector(selectIsNearbyOffersLoading);
  const currentOffer = useAppSelector(selectOffer);

  //Сброс состояния при размонтировании комопнента
  useEffect(() =>() => {
    dispatch(changeActiveOfferId(null));
  }, [dispatch]);

  const [slicedNearbyOffers] = useOfferInfo();

  if (isOfferLoading || isCommentsLoading || isNearbyOffersLoading) {
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
