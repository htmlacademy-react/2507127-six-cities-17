import Header from '../../components/header/header';
import { PagesList } from '../../const';
import Title from '../../components/title/title';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import MainPageContent from '../../components/main-page-content/main-page-content';
import { changeActiveOfferId } from '../../store/offers-process/offers-process';

function MainPage(): JSX.Element{
  const dispatch = useAppDispatch();
  //Сброс выбранного id. Ранее, при возврате со страницы offer, выбранный id отсавался в глобальном состоянии
  useEffect(() =>{
    dispatch(changeActiveOfferId(null));
  });

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <MainPageContent/>
    </div>
  );
}

export default MainPage;
