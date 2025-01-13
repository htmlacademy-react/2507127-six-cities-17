import { useEffect } from 'react';
import { fetchNearbyOffersAction, fetchOfferCommentsAction, getOfferByIdAction } from '../store/api-actions';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { OffersData } from '../types/offers';
import { getNearOffers } from '../utils/offers';
import { selectNearbyOffers, selectOffers } from '../store/app-data/app-data.selectors';

type OfferInfoData = [OffersData[]]

export const useOfferInfo = (): OfferInfoData => {
  const {id} = useParams();
  const dispatch = useAppDispatch();

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

  return [slicedNearbyOffers];
};
