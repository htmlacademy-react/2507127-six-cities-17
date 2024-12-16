import { GeneralCategories } from '../../../const';

type MarkProps ={
  markClass: GeneralCategories;
}

function Mark({markClass}: MarkProps):JSX.Element{
  return(
    <div className={`${markClass}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default Mark;
