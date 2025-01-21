import Header from '../../components/header/header';
import { PagesList } from '../../const';
import Title from '../../components/title/title';
import MainPageContent from '../../components/main-page-content/main-page-content';

function MainPage(): JSX.Element{
  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <MainPageContent/>
    </div>
  );
}

export default MainPage;
