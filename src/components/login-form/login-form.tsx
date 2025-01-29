import { FormEvent, useEffect, useRef } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { PASSWORD_MIN_LENGTH } from '../../const';
import { toast } from 'react-toastify';

function LoginForm():JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => () => {
    if (formRef.current !== null) {
      formRef.current.reset();
    }
  }, []);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value.replaceAll(' ', '')
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'rejected') {
            toast.warn('Unable to access server');
          }
        });
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form ref={formRef} onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            pattern='(?=.*\d)(?=.*[A-Za-z]).+'
            title='Пароль должен содержать как минимум 1 букву(латиница) и 1 цифру'
            minLength={PASSWORD_MIN_LENGTH}
            required
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
            Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
