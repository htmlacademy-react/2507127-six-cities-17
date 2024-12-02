import { nanoid } from 'nanoid';

type OfferGalleryProps = {
  GalleryImagesCount: number;
}

function OfferGalleryItem():JSX.Element{
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src="img/room.jpg"
        alt="Photo studio"
      />
    </div>
  );
}

function OfferGallery({GalleryImagesCount}: OfferGalleryProps):JSX.Element{
  const galleryList = Array.from({length:GalleryImagesCount}).map(() => <OfferGalleryItem key={nanoid()}/>);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {galleryList}
      </div>
    </div>
  );
}

export default OfferGallery;
