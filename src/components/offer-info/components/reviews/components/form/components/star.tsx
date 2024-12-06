type InputProps = {
  num: number;
  gradation: string;
}

function Star({num, gradation}: InputProps):JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={num}
        id={`${num}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${num}-stars`}
        className="reviews__rating-label form__rating-label"
        title={gradation}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default Star;
