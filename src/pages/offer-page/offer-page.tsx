import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NearPlaces from '../../components/near-places/near-places';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInfo from '../../components/offer-info/offer-info';
import Title from '../../components/title/title';
import { GeneralCategory, PagesList } from '../../const';
import { OffersData } from '../../types/offers';
import { ReviewComment } from '../../types/comments';
import Map from '../../components/map/map';
import { getNearOffers } from '../../utils/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectIsCommentsLoading, selectIsNearbyOffersLoading, selectIsOfferLoading, selectNearbyOffers, selectOffer, selectOfferComments, selectOffers } from '../../store/selectors';
import { fetchNearbyOffersAction, fetchOfferCommentsAction, getOfferByIdAction } from '../../store/api-actions';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';


function OfferPage(): JSX.Element{
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isOfferLoading = useAppSelector(selectIsOfferLoading);
  const isNearbyOffersLoading = useAppSelector(selectIsNearbyOffersLoading);
  const isCommentsLoading = useAppSelector(selectIsCommentsLoading);

  const currentOffer = useAppSelector(selectOffer);
  const nearbyOffers = useAppSelector(selectNearbyOffers) as OffersData[];
  const offerComments = useAppSelector(selectOfferComments) as ReviewComment[];


  const allOffers = useAppSelector(selectOffers);
  const slicedNearbyOffers = getNearOffers(nearbyOffers, allOffers, id) as OffersData[];

  useEffect(() => {
    //Добавил это состояние, так как иначе useEffect вообще не успевал выполниться
    setIsLoading(false);
    if (id) {
      dispatch(getOfferByIdAction(id))
        .then((response) => {
          if (response.meta.requestStatus !== 'rejected') {
            dispatch(fetchNearbyOffersAction(id));
            dispatch(fetchOfferCommentsAction(id));
          }
        });
    }
  }, [id, dispatch]);

  if (isLoading || isOfferLoading || isNearbyOffersLoading || isCommentsLoading) {
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
          <OfferInfo comments={offerComments} offer={currentOffer}/>
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
