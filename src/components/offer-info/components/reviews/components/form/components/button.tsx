import { memo } from 'react';

type ButtonType = {
  isDisabled: boolean;
}

function ButtonTemplate({isDisabled}: ButtonType):JSX.Element {
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

const Button = memo(ButtonTemplate);

export default Button;
