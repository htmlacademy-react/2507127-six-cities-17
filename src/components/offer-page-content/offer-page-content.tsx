import { GeneralCategory } from '../../const';
import { FullOffer, OffersData } from '../../types/offers';
import Map from '../map/map';
import NearPlaces from '../near-places/near-places';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferInfo from '../offer-info/offer-info';

type OfferPageContentProps = {
  currentOffer: FullOffer;
  nearbyOffers: OffersData[];
}

function OfferPageContent({currentOffer, nearbyOffers}: OfferPageContentProps): JSX.Element{
  const {images} = currentOffer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={images}/>
        <OfferInfo offer={currentOffer}/>
        {nearbyOffers.length && <Map mapClass={GeneralCategory.Offer} offers={nearbyOffers}/>}
      </section>
      <div className="container">
        <NearPlaces offers={nearbyOffers}/>
      </div>

    </main>
  );
}

export default OfferPageContent;
