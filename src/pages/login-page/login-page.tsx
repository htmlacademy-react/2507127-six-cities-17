import Header from '../../components/header/header';
import LocationsItem from '../../components/locations-item/locations-item';
import LoginForm from '../../components/login-form/login-form';
import Title from '../../components/title/title';
import { PagesList } from '../../const';

function CurrentLocation():JSX.Element {
  return (
    <section className="locations locations--login locations--current">
      <LocationsItem locationName='Amsterdam' isSingle/>
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