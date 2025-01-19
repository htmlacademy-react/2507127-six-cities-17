import { nanoid } from 'nanoid';

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
        // alt="Photo studio"
      />
    </div>
  );
}

function OfferGallery({images}: OfferGalleryProps):JSX.Element{
  const galleryList = images.map((url) => <OfferGalleryItem url={url} key={nanoid()}/>);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {galleryList}
      </div>
    </div>
  );
}

export default OfferGallery;
