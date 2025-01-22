import { memo } from 'react';

function LabelTemplate():JSX.Element {
  return(
    <label className="reviews__label form__label" htmlFor="review">
                Your review
    </label>
  );
}

const Label = memo(LabelTemplate);

export default Label;
