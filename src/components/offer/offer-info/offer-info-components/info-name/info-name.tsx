import BookmarkButton from '../../../../bookmark-button/bookmark-button';

function InfoName():JSX.Element{
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
              Beautiful &amp; luxurious studio at great location
      </h1>
      <BookmarkButton bookmarkClass='offer'/>
    </div>
  );
}

export default InfoName;
