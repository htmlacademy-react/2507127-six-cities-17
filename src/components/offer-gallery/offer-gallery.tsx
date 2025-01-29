import { nanoid } from 'nanoid';
import { OFFER_IMAGES_NUMBER } from '../../const';

type OfferGalleryProps = {
  images: string[];
}

type OfferGalleryItemProps = {
  url: string;
}

function OfferGalleryItem({url}: OfferGalleryItemProps):JSX.Element{
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={url}
      />
    </div>
  );
}

function OfferGallery({images}: OfferGalleryProps):JSX.Element{
  const slicedImages = images.slice(0, OFFER_IMAGES_NUMBER);
  const galleryList = slicedImages.map((url) => <OfferGalleryItem url={url} key={nanoid()}/>);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {galleryList}
      </div>
    </div>
  );
}

export default OfferGallery;
