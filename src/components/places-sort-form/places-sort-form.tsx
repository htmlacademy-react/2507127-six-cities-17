import SortOffersList from '../sort-offers-list/sort-offers-list';

function PlacesSortForm(): JSX.Element{
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
    Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortOffersList/>
    </form>

  );
}

export default PlacesSortForm;
