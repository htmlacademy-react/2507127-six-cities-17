type DescriptionType = {
  description: string;
}

function Description({description}: DescriptionType):JSX.Element{
  return (
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  );
}

export default Description;
