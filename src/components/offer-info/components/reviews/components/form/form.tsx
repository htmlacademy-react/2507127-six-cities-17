import ButtonWrapper from './components/button-wrapper';
import Label from './components/label';
import Rating from './components/rating';
import Text from './components/text';

function Form():JSX.Element {
  return (
    <form className="reviews__form form" action="#" method="post">
      <Label/>
      <Rating/>
      <Text/>
      <ButtonWrapper/>
    </form>
  );
}

export default Form;
