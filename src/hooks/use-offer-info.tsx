import { useEffect } from 'react';
import { fetchNearbyOffersAction, fetchOfferCommentsAction, getOfferByIdAction } from '../store/api-actions';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { FullOffer, OffersData } from '../types/offers';
import { selectNearbyOffers, selectOffer, selectOffers } from '../store/selectors';
import { getNearOffers } from '../utils/offers';

type OfferInfoData = [FullOffer | null, OffersData[]]

export const useOfferInfo = (): OfferInfoData => {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(selectOffer);
  const nearbyOffers = useAppSelector(selectNearbyOffers) as OffersData[];

  const allOffers = useAppSelector(selectOffers);
  const slicedNearbyOffers = getNearOffers(nearbyOffers, allOffers, id) as OffersData[];

  useEffect(() => {
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

  return [currentOffer, slicedNearbyOffers];
};
