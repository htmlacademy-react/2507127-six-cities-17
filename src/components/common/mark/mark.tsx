import { GeneralCategory } from '../../../const';

type MarkProps ={
  markClass: GeneralCategory;
}

function Mark({markClass}: MarkProps):JSX.Element{
  return(
    <div className={`${markClass}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default Mark;
