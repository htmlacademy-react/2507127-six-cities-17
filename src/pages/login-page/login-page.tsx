import Header from '../../components/header/header';
import LocationsItem from '../../components/locations-item/locations-item';
import LoginForm from '../../components/login-form/login-form';
import Title from '../../components/title/title';
import { PagesList } from '../../const';
import { useAppSelector } from '../../hooks';

function CurrentLocation():JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  return (
    <section className="locations locations--login locations--current">
      <LocationsItem city={currentCity} isSingle/>
    </section>
  );
}

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Title pageName={PagesList.Login}/>
      <Header isLoginPage/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <CurrentLocation/>
        </div>
      </main>
    </div>

  );
}

export default LoginPage;
