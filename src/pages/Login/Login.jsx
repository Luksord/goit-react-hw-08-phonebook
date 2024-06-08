import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations/auth';
import { Helmet } from 'react-helmet-async';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main className={css.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={css.form_container}>
        <h2 className={css.title}>Login</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="login-email">
            Email
          </label>
          <input
            className={css.input}
            type="email"
            name="email"
            id="login-email"
          />

          <label className={css.label} htmlFor="login-password">
            Password
          </label>
          <input
            className={css.input}
            type="password"
            name="password"
            id="login-password"
          />

          <button className={css.button} type="submit">
            Log in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
