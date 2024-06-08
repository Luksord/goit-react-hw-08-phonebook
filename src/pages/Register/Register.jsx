import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { register } from '../../redux/operations/auth';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main className={css.container}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className={css.form_container}>
        <h2 className={css.title}>Registration</h2>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label} htmlFor="register-name">
            Username
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            id="register-name"
          />

          <label className={css.label} htmlFor="register-email">
            Email
          </label>
          <input
            className={css.input}
            type="text"
            name="email"
            id="register-email"
          />

          <label className={css.label} htmlFor="register-password">
            Password
          </label>
          <input
            className={css.input}
            type="text"
            name="password"
            id="register-password"
          />

          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
