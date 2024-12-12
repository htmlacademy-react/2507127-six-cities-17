type ButtonType = {
  isDisabled: boolean;
}

function Button({isDisabled}: ButtonType):JSX.Element {
  return(
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={!isDisabled}
    >
                  Submit
    </button>
  );
}

export default Button;
