import Header from '../../components/header/header';
import { PagesList } from '../../const';
import Title from '../../components/title/title';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { changeActiveOfferId } from '../../store/action';
import MainContent from '../../components/main-content/main-content';
import LoadingScreen from '../../components/common/loading-screen/loading-screen';
import { selectisOffersDataLoading } from '../../store/selectors';

function MainPage(): JSX.Element{
  const dispatch = useAppDispatch();
  //Сброс выбранного id. Ранее, при возврате со страницы offer, выбранный id отсавался в глобальном состоянии
  useEffect(() =>{
    dispatch(changeActiveOfferId(null));
  });

  const isOffersDataLoading = useAppSelector(selectisOffersDataLoading);
  if (isOffersDataLoading) {
    return <LoadingScreen/>;
  }

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default MainPage;
